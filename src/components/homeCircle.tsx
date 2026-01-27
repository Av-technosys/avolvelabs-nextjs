import Image from "next/image";
import React from "react";

const HomeCircle = () => {
  return (
    <div className="pt-5 md:pt-10 relative bg-[linear-gradient(to_bottom,#FFFFFF,#AEDEFC)] flex flex-col items-center ">
      <div className="z-10 flex justify-center max-w-4xl mx-auto">
        <Image
          width={800}
          height={600}
          unoptimized
          src="/images/circle.png"
          alt="Salesforce Circle"
          className="drop-shadow-xl max-sm:h-[300]"
        />
      </div>

      <div className="absolute bottom-0 w-full ">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="relative block"
        >
          <path
            d="M0 120 L0 80 C360 0 1080 0 1440 80 L1440 120 Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default HomeCircle;
