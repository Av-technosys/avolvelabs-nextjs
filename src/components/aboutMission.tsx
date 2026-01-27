import Image from 'next/image';
import React from 'react';

const AboutMission = () => {
  const data = [
    {
      title: "Our Mission",
      description: "Deploy highly skilled CRM experts to implement, customize, and optimize Salesforce & Zoho solutions.Deliver tailored solutions that align with each client’s unique business objectives.Ensure measurable business impact, helping clients scale efficiently and strategically.Continuously innovate and improve, staying ahead of industry trends.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Our Vision",
      description: "Empower businesses with intelligent Salesforce & Zoho solutions that drive measurable growth.Be the most trusted partner for organizations seeking seamless CRM integration and optimization.Lead through innovation, setting benchmarks in CRM services and business transformation.Foster long-term partnerships by delivering consistent value and results.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section className="px-8 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-[38px] font-bold text-[#032d60] mb-4">
            Our Mission & Vision
          </h2>
          <p className="font-poppins text-md md:text-[18px] text-gray-700">
            We take pride in our work, and the industry has taken notice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <div 
              key={index}
              className="group relative h-[400] md:h-[400] overflow-hidden rounded-[30px] cursor-pointer shadow-xl"
            >

              <Image
               width={800}
                height={600}
                unoptimized
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover "
              />


              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 text-white">
                <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                  {item.title}
                </h3>
                <div className="overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[300] opacity-0 group-hover:opacity-100">
                  <p className="font-poppins text-sm md:text-base leading-relaxed text-gray-200">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMission;