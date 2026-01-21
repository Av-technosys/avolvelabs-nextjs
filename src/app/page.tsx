import BrandCarousel from "@/components/brandCarousel";
import FAQ from "@/components/faq";
import FraudAlert from "@/components/fraudAlert";
import HomeCarousel from "@/components/homeCarousel";
import HomeCircle from "@/components/homeCircle";
import HomeHero from "@/components/homeHero";
import HomeLatest from "@/components/homeLatest";
import HomeReportCard from "@/components/HomeReportCard";
import HomeServiceCards from "@/components/homeServiceCards";
import HomeValues from "@/components/HomeValues";
import HomeVideo from "@/components/homeVideo";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <>
      <FraudAlert />
     <HomeHero/>
     <HomeCarousel/>
     <HomeVideo/>
     <HomeCircle/>
     <HomeServiceCards/>
     <BrandCarousel/>
     <HomeReportCard/>
    <HomeValues/>
     <HomeLatest/>
     <Testimonial/>
     <FAQ/>
    </>
  );
}
