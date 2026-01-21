"use client";
import * as React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import Image from "next/image";

const carouselData = [
  {
    id: 1,
    name: "Tracy Matis",
    role: "VP, Strategy & Transformation, PepsiCo",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/PepsiCo_logo.svg",
    image:
      "https://media.istockphoto.com/id/1310814041/photo/portrait-of-a-businesswoman-standing-in-a-a-modern-office.jpg?s=612x612&w=0&k=20&c=rLDYEGaGfbFq6mJPLc2FHjc6KBKyJETu38y4a3x11cM=",
  },
  {
    id: 2,
    name: "Stephanie Paetow",
    role: "Business Owner of Salesforce ONE.CRM",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg",
    image:
      "https://media.istockphoto.com/id/1310814041/photo/portrait-of-a-businesswoman-standing-in-a-a-modern-office.jpg?s=612x612&w=0&k=20&c=rLDYEGaGfbFq6mJPLc2FHjc6KBKyJETu38y4a3x11cM=",
  },
  {
    id: 3,
    name: "Stephanie Paetow",
    role: "Business Owner of Salesforce ONE.CRM",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg",
    image:
      "https://media.istockphoto.com/id/1310814041/photo/portrait-of-a-businesswoman-standing-in-a-a-modern-office.jpg?s=612x612&w=0&k=20&c=rLDYEGaGfbFq6mJPLc2FHjc6KBKyJETu38y4a3x11cM=",
  },
  {
    id: 4,
    name: "Stephanie Paetow",
    role: "Business Owner of Salesforce ONE.CRM",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg",
    image:
      "https://media.istockphoto.com/id/1310814041/photo/portrait-of-a-businesswoman-standing-in-a-a-modern-office.jpg?s=612x612&w=0&k=20&c=rLDYEGaGfbFq6mJPLc2FHjc6KBKyJETu38y4a3x11cM=",
  },
  {
    id: 5,
    name: "Stephanie Paetow",
    role: "Business Owner of Salesforce ONE.CRM",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg",
    image:
      "https://media.istockphoto.com/id/1310814041/photo/portrait-of-a-businesswoman-standing-in-a-a-modern-office.jpg?s=612x612&w=0&k=20&c=rLDYEGaGfbFq6mJPLc2FHjc6KBKyJETu38y4a3x11cM=",
  },
];

export default function HomeCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [isPlaying, setIsPlaying] = React.useState(true);

  const plugin = React.useRef(
    AutoScroll({
      speed: 1,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  );

  const toggleAutoScroll = React.useCallback(() => {
    const autoScroll = plugin.current;
    if (!autoScroll) return;

    if (isPlaying) {
      autoScroll.stop();
    } else {
      autoScroll.play();
    }

    setIsPlaying((prev) => !prev);
  }, [isPlaying]);

  const handleNext = () => {
    if (api) api.scrollNext();
  };

  const handlePrev = () => {
    if (api) api.scrollPrev();
  };

  return (
    <div className="max-w-7xl mx-auto bg-[linear-gradient(to_right,#061C5B,#0B2FA0)] overflow-hidden">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className=""
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
      >
        <CarouselContent className="">
          {carouselData.map((item) => (
            <CarouselItem key={item.id} className=" md:basis-1/2 lg:basis-1/3">
              <Card className="rounded-[32px] bg-white shadow-2xl">
                <CardContent className="p-2">
                  <div className="pt-0 mt-0 ">
                    <Image
                      width={800}
                      height={600}
                      unoptimized
                      src={item.image}
                      alt={item.name}
                      className="rounded-[32px]"
                    />
                  </div>
                  <div className="pt-1  flex items-start gap-4">
                    <Image
                      width={800}
                      height={600}
                      unoptimized
                      src={item.companyLogo}
                      alt="Logo"
                      className="w-10 h-10 "
                    />
                    <div>
                      <h3 className="font-bold text-[#032d60] font-playfair text-lg">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-tight font-poppins">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex items-center justify-end gap-3 mt-10 pr-4">
          <Button
            onClick={handlePrev}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 bg-transparent  border-white hover:text-black text-white hover:bg-white/30"
          >
            <IconArrowNarrowLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={toggleAutoScroll}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-white bg-transparen hover:bg-white/20 "
          >
            {isPlaying ? (
              <IconPlayerPauseFilled className="h-5 w-5 fill-white hover:text-black" />
            ) : (
              <IconPlayerPlayFilled className="h-5 w-5 fill-white" />
            )}
          </Button>

          <Button
            onClick={handleNext}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-transparent text-white  hover:bg-white/30 hover:text-black "
          >
            <IconArrowNarrowRight className="h-6 w-6" />
          </Button>
        </div>
        {/* Imp Logic */}
        <div className="">
          <svg viewBox="110 0 1140 120" preserveAspectRatio="none" className="">
            <path
              d="M0 120L1440 120L1440 0C1440 0 1080 80 720 80C360 80 0 0 0 0L0 120Z"
              fill="#45abff"
              opacity="0.7"
            />
            <path
              d="M0 120L1440 120L1440 0C1440 0 1080 80 720 80C360 80 0 0 0 0L0 120Z"
              fill="white"
              style={{ transform: "translateY(17px)" }}
            />
          </svg>
        </div>
      </Carousel>
    </div>
  );
}
