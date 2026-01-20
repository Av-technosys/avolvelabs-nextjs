import FAQ from "@/components/faq";
import FraudAlert from "@/components/fraudAlert";
import HomeCarousel from "@/components/homeCarousel";
import HomeCircle from "@/components/homeCircle";
import HomeHero from "@/components/homeHero";
import HomeServiceCards from "@/components/homeServiceCards";
import HomeVideo from "@/components/homeVideo";

export default function Home() {
  return (
    <>
      <FraudAlert />
     <HomeHero/>
     <HomeCarousel/>
     <HomeVideo/>
     <HomeServiceCards/>
     <HomeCircle/>
     <FAQ/>
    </>
  );
}
