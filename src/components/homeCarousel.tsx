"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowUpRight } from "lucide-react";

export interface CarouselItemData {
  id: number | string;
  name: string;
  role: string;
  companyLogo: string;
  image: string;
  tag?: string;
}

export const carouselData: CarouselItemData[] = [
  {
    id: 1,
    name: "Connecting Healthcare with a 360° Patient Perspective",
    role: "VP, Strategy & Transformation, PepsiCo",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/PepsiCo_logo.svg",
    image:
      "/images/healthcare.jpeg",
    tag: "Healthcare",
  },
  {
    id: 2,
    name: "Modernizing Music Rights Management at Enterprise Scale",
    role: "Business Owner of Salesforce ONE.CRM",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg",
    image:
     "/images/music.jpg",
    tag: "Media",
  },
  {
    id: 3,
    name: "Enabling the Shift Toward Subscription-Based Revenue",
    role: "Business Owner of Salesforce ONE.CRM",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg",
    image:
      "/images/pivot.jpg",
    tag: "Manufacturing",
  },
  {
    id: 4,
    name: "Transforming Broadband with Seamless Digital Onboarding",
    role: "Business Owner of Salesforce ONE.CRM",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg",
    image:
      "/images/dashboard.jpg",
    tag: "Telecom",
  },
  {
    id: 5,
    name: "From Scattered Systems to a Centralized Growth Engine",
    role: "Business Owner of Salesforce ONE.CRM",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg",
    image:
      "/images/case4.jpeg",
    tag: "Operations",
  },
  {
    id: 6,
    name: "Transforming Operations for a Sustainable Competitive Edge",
    role: "Business Owner of Salesforce ONE.CRM",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg",
    image:
      "/images/case6.jpeg",
    tag: "Manufacturing",
  },
];

interface HomeCarouselProps {
  items?: CarouselItemData[];
}

export default function HomeCarousel({ items = carouselData }: HomeCarouselProps) {
  const autoplay = React.useRef(
    Autoplay({
      delay: 3200,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = React.useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        autoplay.current?.reset();
      }
    },
    [emblaApi]
  );

  return (
    <div className="w-full relative select-none">
      {/* Carousel Track */}
      <div className="overflow-visible w-full py-5 sm:py-6 md:py-10" ref={emblaRef}>
        <div className="flex -ml-2 sm:-ml-3 md:-ml-4 items-center">
          {items.map((item, index) => {
            const isActive = index === selectedIndex;
            return (
              <div
                key={item.id}
                className="pl-2 sm:pl-3 md:pl-4 basis-[74%] sm:basis-[70%] md:basis-[60%] lg:basis-[54%] xl:basis-[50%] shrink-0"
              >
                <div
                  onClick={() => {
                    if (!isActive) {
                      scrollTo(index);
                    }
                  }}
                  className={`group relative h-[350px] sm:h-[400px] md:h-[460px] lg:h-[480px] rounded-[22px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden transition-all duration-500 ease-out ${
                    isActive
                      ? "scale-100 translate-y-0 opacity-100 shadow-[0_24px_50px_rgba(2,12,38,0.25)] ring-1 ring-black/5 z-20 cursor-default"
                      : "scale-[0.92] translate-y-3 sm:translate-y-4 md:translate-y-6 opacity-65 hover:opacity-85 shadow-[0_8px_24px_rgba(2,12,38,0.12)] z-10 cursor-pointer"
                  }`}
                >
                  {/* Card Background Image */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 800px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={index === 0}
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020712] via-[#020712]/60 to-transparent opacity-95 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#020712]/35 via-transparent to-transparent z-10" />

                  {/* Tag Pill */}
                  {item.tag && (
                    <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 md:top-6 md:left-6 z-20">
                      <span className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-white/95 text-[#071225] shadow-md backdrop-blur-md tracking-wide">
                        {item.tag}
                      </span>
                    </div>
                  )}

                  {/* Bottom Content Area */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 md:p-8 z-20 flex items-end justify-between gap-3 sm:gap-4">
                    <div className="flex-1 pr-1 sm:pr-2">
                      <h3 className="text-white font-bold text-[15px] sm:text-lg md:text-2xl lg:text-[23px] leading-[1.22] tracking-tight drop-shadow-md">
                        {item.name}
                      </h3>
                      {item.role && (
                        <p className="text-white/85 text-[11px] sm:text-xs md:text-sm font-normal leading-relaxed mt-1 sm:mt-2 line-clamp-2 drop-shadow">
                          {item.role}
                        </p>
                      )}
                    </div>

                    <div className="shrink-0 mb-0.5 sm:mb-1">
                      <Link
                        href="/case-studies"
                        className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white text-[#0066cc] flex items-center justify-center shadow-lg hover:bg-[#0066cc] hover:text-white transition-all duration-300 group/btn"
                        aria-label={`View case study: ${item.name}`}
                        onClick={(e) => {
                          if (!isActive) {
                            e.preventDefault();
                            scrollTo(index);
                          }
                        }}
                      >
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls: Dots */}
      <div className="flex items-center justify-center gap-2 mt-4 md:mt-6">
        {scrollSnaps.map((_, index) => {
          const isSelected = index === selectedIndex;
          return (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "w-8 bg-[#0066cc]"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
