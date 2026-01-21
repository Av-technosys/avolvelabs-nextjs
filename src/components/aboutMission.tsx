import Image from 'next/image';
import React from 'react';

const AboutMission = () => {
  const data = [
    {
      title: "Our Mission",
      description: "Our mission is \"empowering enterprises through transformative technology and exceptional people to achieve sustainable success.\" At Avolvelabs, we strive to make a meaningful difference in our clients' operations and growth. By aligning cutting-edge technologies with deep domain expertise,",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Our Vision",
      description: "Our vision is to be the trusted global partner for AI-powered digital transformation, recognized for innovative solutions and customer success. We envision a future where effortless, connected technologies drive growth and create value for businesses worldwide.",
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
          <p className="font-poppins text-md md:text-[18px] text-gray-600">
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