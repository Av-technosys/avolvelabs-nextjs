import HeroSection from "./heroSection"


const HomeVideo = () => {
  return (
    <>
      <HeroSection
        title={<>Grow fast with our <span className="text-[#0176d3]">free CRM.</span></>}
        description={<>See value from day one with <span className="text-[#0176d3] underline">our free, all-in-one CRM...</span> Stop juggling spreadsheets...</>}
        primaryBtnText="Start for free"
        secondaryBtnText="Start demo"
        videoSrc="https://www.youtube.com/embed/iqIp_zgDJ0k?autoplay=0"
        showLinks={true}
        links={[
          { text: "Get it for free", href: "/" },
          { text: "See full pricing", href: "/" }
        ]}
      />

      {/* SECTION 2: Reversed Layout (Video Left, Text Right) */}
      <HeroSection 
        reverse={true}
        title={<>2.5M+ conversations handled by <br /> Agentforce and counting.</>}
        description="Everyone talks the AI talk. We’re walking the walk. With 66% autonomous case resolution..."
        primaryBtnText="See our stories"
        secondaryBtnText="Experience Salesforce Help"
        videoSrc="https://www.youtube.com/embed/iqIp_zgDJ0k"
      />

      {/* SECTION 3: Centered Layout (No Video) */}
      <HeroSection 
        isCentered={true}
        title={<>Salesforce is the platform<br /> for the Agentic Enterprise.</>}
        description="Our deeply unified platform brings together apps, data, agents, and metadata..."
        primaryBtnText="See all products"
      />
    </>
  )
}
export default HomeVideo;