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

export const metadata  = {
  title:"CRM Software Development Company for Businesses | AvolveLabs",
  description:"AvolveLabs is a CRM software development company that helps growing businesses align their CRM with sales, teams, and revenue strategy for better growth.",
  alternates:{
    canonical:"https://avolvelabs.com/",
  }
}

export default function Home() {
  return (
    <>
      <FraudAlert />
      <HomeHero />
      <HomeCarousel />
      <HomeVideo />
      <HomeCircle />
      <HomeServiceCards />
      {/* <HomeReportCard /> */}
      <HomeValues />
      <BrandCarousel />
      <HomeCrmSales />
      <HomeLatest />
      <Testimonial />
      {/* <FAQ /> */}
    </>
  );
}
