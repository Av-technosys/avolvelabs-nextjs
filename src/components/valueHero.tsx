import React from 'react'

const ManageHero = () => {
  return (
    <>
      <div
        className="relative w-full bg-no-repeat bg-bottom overflow-hidden"
        style={{
          backgroundImage: "url('/aboutImg.png')",
          backgroundSize: "clamp(100%, 30vw + 100%, 250%) auto",
          backgroundColor: "#EDFFF0",
          backgroundBlendMode: "multiply",
        }}
      >
        <section className="text-center md:px-8 px-6 pt-16 pb-20 md:pt-10 md:pb-52 bg-linear-to-b from-white/40 to-transparent">
          <h1 className="font-playfair text-3xl md:text-6xl font-bold text-[#032d60] leading-tight">
           Value Added Services
            <br />
          </h1>
          <p className="font-poppins text-sm md:text-lg text-gray-700 max-w-6xl mx-auto mt-6 md:mt-10 px-2 md:px-4 leading-relaxed">
            Adoption isn&apos;t training, it&apos;s design, behavior, and reinforcement.
Go-Live is Just the Starting Line
Many companies implement expensive CRMs only to see them become expensive address books. We fix this by focusing on the human element and business metrics.
          </p>
        </section>
        <div className="">
          <svg viewBox="380 0 1040 120" preserveAspectRatio="none" className="">
            <path
              d="M0 120 L0 120 C360 0 1080 0 1440 120 L1440 120 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default ManageHero
