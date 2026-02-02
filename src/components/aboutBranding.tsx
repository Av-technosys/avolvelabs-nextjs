import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'


const brands = [
  { name: "Boomi", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Dell_Boomi_logo.svg/2560px-Dell_Boomi_logo.svg.png" },
  { name: "Oracle NetSuite", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Oracle_NetSuite_logo.svg/2560px-Oracle_NetSuite_logo.svg.png" },
  { name: "Apigee", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Google_Cloud_Apigee_logo.svg/2560px-Google_Cloud_Apigee_logo.svg.png" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png" },
  { name: "Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" },
  { name: "Intapp", logo: "https://logos-world.net/wp-content/uploads/2021/03/Intapp-Logo.png" }
]

const AboutBranding = () => {
  return (
    <>
    <section className="w-full">
  <div className="relative w-full min-h-67.5 md:min-h-112.5 lg:min-h-162.5">
    <Image
      src="/images/about.jpeg"
      alt="Commitment visual"
      fill
      className="object-contain"  
      priority
    />
    <div className="absolute inset-0 bg-black/" />
  </div>
</section>

      
    <section className="md:hidden hidden mx-auto max-w-7xl bg-[linear-gradient(to_right,#061C5B,#0B2FA0)] px-8 py-10">
      <div className="">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          <div className="flex flex-col space-y-6 text-white">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold leading-tight">
              Platform Expertise That <br /> Accelerates Results
            </h2>
            <p className="font-poppins text-md md:text-[18px] opacity-90 max-w-lg leading-relaxed">
              We&apos;re certified partners with leading iPaaS, ERP, and automation 
              platforms — delivering seamless, scalable solutions across 
              ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {brands.map((brand, index) => (
              <Card 
                key={index} 
                className="group relative border-none rounded-2xl bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center p-6 h-32 md:h-40 cursor-pointer"
              >
                <CardContent className="p-0 flex flex-col items-center justify-center">
                  <Image
                  unoptimized
                   width={800}
                height={600}
                    src={brand.logo} 
                    alt={brand.name}
                    className="h-10 md:h-14 w-auto object-contain transition-all duration-300 group-hover:opacity-20"
                  />
                  
                  {/* Hover Text */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-poppins font-bold text-[#01579b] text-center px-2">
                      {brand.name} Partner
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default AboutBranding