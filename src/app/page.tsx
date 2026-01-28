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
