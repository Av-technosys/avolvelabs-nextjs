"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IconArrowUpRight } from "@tabler/icons-react";


interface HeroSectionProps {
  title: React.ReactNode;
  description: React.ReactNode;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
  videoSrc?: string;
  imageSrc?: string; 
  reverse?: boolean; 
  showLinks?: boolean; 
  links?: { text: string; href: string }[];
  isCentered?: boolean; 
}

const HeroSection = ({
  title,
  description,
  primaryBtnText,
  primaryBtnLink = "/",
  secondaryBtnText,
  secondaryBtnLink = "/",
  videoSrc,
  reverse = false,
  showLinks = false,
  links = [],
  isCentered = false
}: HeroSectionProps) => {

  if (isCentered) {
    return (
      <section className="text-center md:px-8 px-8 py-10 bg-white">
        <h1 className="font-playfair text-[32px] font-bold text-[#032d60] leading-tight">
          {title}
        </h1>
        <p className="font-poppins text-md md:text-[18px] text-gray-700 max-w-3xl mx-auto mt-6 md:mt-8 px-2 leading-relaxed">
          {description}
        </p>
        {primaryBtnText && (
          <Link href={primaryBtnLink} className="mt-8 md:mt-10 inline-block">
            <Button className="bg-[#0176d3] hover:bg-[#014486] text-white px-16 md:px-9 py-6 rounded-md text-base md:text-lg font-poppins">
              {primaryBtnText}
            </Button>
          </Link>
        )}
      </section>
    )
  }

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-8 md:px-11">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className={`${reverse ? "lg:order-2" : "lg:order-1"}`}>
            <h1 className="text-3xl md:text-[38px] font-playfair font-bold text-[#032d60] leading-tight">
              {title}
            </h1>

            <p className="mt-6 text-md md:text-[18px] text-gray-700 font-poppins leading-relaxed">
              {description}
            </p>

            {showLinks && links.length > 0 && (
              <div className="mt-4 font-medium font-poppins text-[#0176d3]">
                {links.map((link, index) => (
                  <React.Fragment key={index}>
                    <Link href={link.href} className="underline cursor-pointer">
                      {link.text}
                    </Link>
                    {index < links.length - 1 && " · "}
                  </React.Fragment>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {primaryBtnText && (
                <Link href={primaryBtnLink} className="w-full sm:w-auto">
                  <Button className="font-poppins bg-[#0176d3] px-8 py-6 text-base hover:bg-[#014486] w-full flex gap-2">
                    {primaryBtnText} {reverse && <IconArrowUpRight size={18} />}
                  </Button>
                </Link>
              )}

              {secondaryBtnText && (
                <Link href={secondaryBtnLink} className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="font-poppins border-[#0176d3] px-8 py-6 text-base text-[#0176d3] w-full flex gap-2"
                  >
                    {secondaryBtnText} {reverse && <IconArrowUpRight size={18} />}
                  </Button>
                </Link>
              )}
            </div>
          </div>

          <div className={`relative overflow-hidden rounded-2xl bg-blue-300 shadow-xl h-64 sm:h-96 lg:h-75 ${reverse ? "lg:order-1" : "lg:order-2"}`}>
            {videoSrc && (
              <iframe
                className="h-full w-full object-cover"
                src={videoSrc}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection