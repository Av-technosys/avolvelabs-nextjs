"use client";

import { useEffect, useState } from "react";
import { LoaderFive, LoaderFour,} from "@/components/ui/loader";

import BrandCarousel from "@/components/brandCarousel";
import FraudAlert from "@/components/fraudAlert";
import HomeCarousel from "@/components/homeCarousel";
import HomeCircle from "@/components/homeCircle";
import HomeCrmSales from "@/components/homeCrmSales";
import HomeHero from "@/components/homeHero";
import HomeLatest from "@/components/homeLatest";
import HomeServiceCards from "@/components/homeServiceCards";
import HomeValues from "@/components/HomeValues";
import HomeVideo from "@/components/homeVideo";
import Testimonial from "@/components/testimonial";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // change time if needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center text-5xl justify-center h-screen">
        <LoaderFour text="Avolvelabs..." />
      </div>
    );
  }

  return (
    <>
      {/* <FraudAlert /> */}
      <HomeHero />
      <HomeCarousel />
      <HomeVideo />
      <HomeCircle />
      <HomeServiceCards />
      <HomeValues />
      <BrandCarousel />
      <HomeCrmSales />
      <HomeLatest />
      <Testimonial />
    </>
  );
}
