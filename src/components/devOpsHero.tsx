import React from "react";


const DevOpsHero = () => {
  return (
    <>
      <div
        className="relative w-full bg-no-repeat bg-bottom overflow-hidden"
        style={{
          backgroundImage: "url('/aboutImg.png')", // Aap apni DevOps image replace kar sakte hain
          backgroundSize: "clamp(100%, 30vw + 100%, 250%) auto",
          backgroundColor: "#f0f4f8", // Light Slate/Blue DevOps theme
          backgroundBlendMode: "multiply",
        }}
      >
        <section className="text-center md:px-8 px-6 pt-16 pb-20 md:pt-10 md:pb-52 bg-linear-to-b from-white/40 to-transparent">
          <h1 className="font-playfair text-3xl md:text-6xl font-bold text-[#032d60] leading-tight">
            Engineering High-Velocity 
            <br />
            <span className="text-blue-600">Infrastructure & Automation.</span>
          </h1>
          <p className="font-poppins text-sm md:text-lg text-gray-700 max-w-6xl mx-auto mt-6 md:mt-10 px-2 md:px-4 leading-relaxed">
            We bridge the gap between development and operations. From cloud-native architectures to automated CI/CD pipelines, we ensure your software delivery is fast, secure, and infinitely scalable.
            <br /><br />
            Move Beyond Manual: Traditional IT silos slow you down. We implement DevSecOps at the core, transforming your infrastructure into a competitive advantage using Kubernetes, Terraform, and AI-driven monitoring.
          </p>
        </section>
        <div className="">
          <svg viewBox="380 0 1040 120" preserveAspectRatio="none">
            <path d="M0 120 L0 120 C360 0 1080 0 1440 120 L1440 120 Z" fill="white" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default DevOpsHero;