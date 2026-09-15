"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { gsap } from "gsap";
import styles from "./Masonry.module.css";

const COLUMN_QUERIES = ["(min-width:1100px)", "(min-width:700px)"];
const COLUMN_VALUES = [3, 2];

export type MasonryItem = {
  id: string;
  img: string;
  url: string;
  height: number;
};

type MasonryLayoutItem<T extends MasonryItem> = T & {
  x: number;
  y: number;
  w: number;
  h: number;
};

type MasonryProps<T extends MasonryItem> = {
  items: T[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: "top" | "bottom" | "left" | "right" | "center" | "random";
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
  renderItem?: (item: T) => ReactNode;
  className?: string;
};

const useMedia = (queries: string[], values: number[], defaultValue: number) => {
  const get = useCallback(() => {
    if (typeof window === "undefined") return defaultValue;
    const matchedIndex = queries.findIndex((query) => matchMedia(query).matches);
    return values[matchedIndex] ?? defaultValue;
  }, [defaultValue, queries, values]);

  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get());
    queries.forEach((query) => matchMedia(query).addEventListener("change", handler));
    return () => queries.forEach((query) => matchMedia(query).removeEventListener("change", handler));
  }, [get, queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });

    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, []);

  return [ref, size] as const;
};

const preloadImages = async (urls: string[]) => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        }),
    ),
  );
};

export default function Masonry<T extends MasonryItem>({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.96,
  blurToFocus = true,
  colorShiftOnHover = false,
  renderItem,
  className,
}: MasonryProps<T>) {
  const columns = useMedia(COLUMN_QUERIES, COLUMN_VALUES, 1);
  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);
  const hasMounted = useRef(false);

  useEffect(() => {
    let isActive = true;

    preloadImages(items.map((item) => item.img)).then(() => {
      if (isActive) setImagesReady(true);
    });

    return () => {
      isActive = false;
    };
  }, [items]);

  const grid = useMemo(() => {
    if (!width) return [];

    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;

    return items.map((item) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      const y = colHeights[col];
      const h = item.height;

      colHeights[col] += h;

      return { ...item, x, y, w: columnWidth, h };
    });
  }, [columns, items, width]);

  const containerHeight = useMemo(
    () => grid.reduce((height, item) => Math.max(height, item.y + item.h), 0),
    [grid],
  );

  const getInitialPosition = useCallback((item: MasonryLayoutItem<T>) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    const direction =
      animateFrom === "random"
        ? (["top", "bottom", "left", "right"] as const)[Math.floor(Math.random() * 4)]
        : animateFrom;

    switch (direction) {
      case "top":
        return { x: item.x, y: -220 };
      case "bottom":
        return { x: item.x, y: window.innerHeight + 220 };
      case "left":
        return { x: -220, y: item.y };
      case "right":
        return { x: window.innerWidth + 220, y: item.y };
      case "center":
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerHeight / 2 - item.h / 2,
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  }, [animateFrom, containerHeight, containerRef]);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.forEach((item, index) => {
      const selector = `[data-masonry-key="${item.id}"]`;
      const animationProps = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h,
      };

      if (!hasMounted.current) {
        const initialPosition = getInitialPosition(item);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: initialPosition.x,
            y: initialPosition.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: "blur(10px)" }),
          },
          {
            opacity: 1,
            ...animationProps,
            ...(blurToFocus && { filter: "blur(0px)" }),
            duration: 0.8,
            ease: "power3.out",
            delay: index * stagger,
          },
        );
      } else {
        gsap.to(selector, {
          ...animationProps,
          duration,
          ease,
          overwrite: "auto",
        });
      }
    });

    hasMounted.current = true;
  }, [grid, imagesReady, stagger, blurToFocus, duration, ease, getInitialPosition]);

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>, item: MasonryLayoutItem<T>) => {
    const selector = `[data-masonry-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    if (colorShiftOnHover) {
      const overlay = event.currentTarget.querySelector(`.${styles.colorOverlay}`);
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0.24,
          duration: 0.3,
        });
      }
    }
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>, item: MasonryLayoutItem<T>) => {
    const selector = `[data-masonry-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    if (colorShiftOnHover) {
      const overlay = event.currentTarget.querySelector(`.${styles.colorOverlay}`);
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
        });
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`${styles.list} ${className ?? ""}`}
      style={{ height: containerHeight || 420 }}
    >
      {grid.map((item) => (
        <div
          key={item.id}
          data-masonry-key={item.id}
          className={styles.itemWrapper}
          onMouseEnter={(event) => handleMouseEnter(event, item)}
          onMouseLeave={(event) => handleMouseLeave(event, item)}
        >
          <div className={styles.itemImg} style={{ backgroundImage: `url(${item.img})` }}>
            {colorShiftOnHover && <div className={styles.colorOverlay} />}
            {renderItem?.(item)}
          </div>
        </div>
      ))}
    </div>
  );
}
