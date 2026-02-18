"use client";

import { useEffect, useState } from "react";
// 1. LoaderFour/Five ki jagah VideoLoader import kiya
import { VideoLoader } from "@/components/ui/loader"; 

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
    }, 3000); // 2. Video dikhne ke liye time thoda badha diya

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white dark:bg-slate-950">
        {/* 3. LoaderFour hata kar VideoLoader call kiya */}
        <VideoLoader />
      </div>
    );
  }

  return (
    <>
      {/* Aapki routing aur components bilkul same hain */}
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