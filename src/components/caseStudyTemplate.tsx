import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "@/app/pages.module.css";
import GhostFibers from "@/components/GhostFibers";
import HomeLatest from "@/components/homeLatest";

export interface CaseStudyItemPoint {
  label?: string;
  text: string;
}

export interface CaseStudySection {
  title: string;
  content?: string | string[];
  items?: CaseStudyItemPoint[];
  workflow?: string;
  quote?: string;
  extraText?: string;
}

export interface CaseStudyTemplateProps {
  badge: string;
  title: string;
  client: string;
  industry: string;
  partner?: string;
  solution?: string;
  coreApps?: string;
  image: string;
  imageAlt: string;
  lead: string;
  sections: CaseStudySection[];
}

export default function CaseStudyTemplate({
  badge,
  title,
  client,
  industry,
  partner = "AvolveLabs",
  solution,
  coreApps,
  image,
  imageAlt,
  lead,
  sections,
}: CaseStudyTemplateProps) {
  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#e6efff]/50 via-[#f0f8ff]/30 to-white">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <GhostFibers
            lightMode
            lineColor="#9bb1e8"
            glowColor="#dce9ff"
            speed={0.05}
            scale={1.4}
            rotation={10}
            layers={5}
            dpr={1}
            fps={30}
          />
        </div>

        <div className="relative mx-auto w-[min(1200px,calc(100%-40px))] z-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[#0a369d] font-semibold text-[15px] hover:text-[#0a2472] transition-colors group/link mb-8 w-fit"
          >
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover/link:-translate-x-1" />
            <span className="border-b border-[#0a369d]/40 group-hover/link:border-[#0a369d] transition-colors pb-0.5">
              Back to Case Studies
            </span>
          </Link>

          <span className="block font-sans text-[10px] font-bold not-italic leading-[15px] tracking-[2px] text-[#0A369D] uppercase mb-4">
            {badge}
          </span>

          <h1 className="font-playfair text-[28px] sm:text-[36px] font-bold not-italic leading-[36px] sm:leading-[45px] tracking-[-0.9px] text-[#0B1425] mb-10 max-w-5xl">
            {title}
          </h1>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 md:p-8 rounded-[20px] bg-white/90 border border-slate-200/80 shadow-[0_15px_40px_rgba(10,54,157,0.06)] backdrop-blur-md">
            <div>
              <span className="block font-sans text-[10px] font-bold not-italic leading-[15px] tracking-[2px] text-[#0A369D] uppercase mb-1.5">
                Client
              </span>
              <p className="font-poppins text-base font-semibold text-[#0b1425]">
                {client}
              </p>
            </div>

            <div>
              <span className="block font-sans text-[10px] font-bold not-italic leading-[15px] tracking-[2px] text-[#0A369D] uppercase mb-1.5">
                Industry
              </span>
              <p className="font-poppins text-base font-semibold text-[#0b1425]">
                {industry}
              </p>
            </div>

            {solution ? (
              <div>
                <span className="block font-sans text-[10px] font-bold not-italic leading-[15px] tracking-[2px] text-[#0A369D] uppercase mb-1.5">
                  Solution
                </span>
                <p className="font-poppins text-base font-semibold text-[#0b1425] leading-snug">
                  {solution}
                </p>
              </div>
            ) : (
              <div>
                <span className="block font-sans text-[10px] font-bold not-italic leading-[15px] tracking-[2px] text-[#0A369D] uppercase mb-1.5">
                  Implementation Partner
                </span>
                <p className="font-poppins text-base font-semibold text-[#0b1425]">
                  {partner}
                </p>
              </div>
            )}

            <div>
              <span className="block font-sans text-[10px] font-bold not-italic leading-[15px] tracking-[2px] text-[#0A369D] uppercase mb-1.5">
                {solution ? "Partner" : "Core Applications Delivered"}
              </span>
              <p className="font-poppins text-base font-semibold text-[#0b1425] leading-snug">
                {solution ? partner : coreApps}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto w-[min(900px,calc(100%-40px))]">
          
          {/* Main Visual Image */}
          <div className="relative h-[300px] sm:h-[420px] md:h-[500px] w-full rounded-[24px] md:rounded-[32px] overflow-hidden mb-16 shadow-lg bg-[#f8f9fa]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          {/* Lead Introduction */}
          <div className="mb-14 pb-10 border-b border-slate-200">
            <p className="font-poppins text-[15px] font-normal not-italic leading-[24.375px] tracking-normal text-[#0B1425]">
              {lead}
            </p>
          </div>

          {/* Content Sections */}
          {sections.map((section, idx) => {
            const isLast = idx === sections.length - 1;
            const contentArray = Array.isArray(section.content)
              ? section.content
              : section.content
              ? [section.content]
              : [];

            return (
              <div
                key={idx}
                className={isLast ? "mb-14" : "mb-14 pb-10 border-b border-slate-200"}
              >
                <h2 className="font-playfair text-[28px] sm:text-[36px] font-bold not-italic leading-[36px] sm:leading-[45px] tracking-[-0.9px] text-[#0B1425] mb-5">
                  {section.title}
                </h2>

                <div className="font-poppins text-[#526174] text-[15px] font-normal not-italic leading-[24.375px] tracking-normal space-y-4">
                  {contentArray.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}

                  {section.items && section.items.length > 0 && (
                    <ul className="space-y-3 pl-2 pt-1">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0a369d] mt-2.5 shrink-0" />
                          <span>
                            {item.label ? (
                              <>
                                <strong className="text-[#0b1425] font-semibold">
                                  {item.label}:{" "}
                                </strong>
                                {item.text}
                              </>
                            ) : (
                              item.text
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.workflow && (
                    <div className="mt-8 p-5 rounded-xl bg-[#f0f8ff] border border-[#0a369d]/20 text-[#0a369d] font-semibold text-sm leading-relaxed">
                      {section.workflow}
                    </div>
                  )}

                  {section.quote && (
                    <blockquote className="mt-8 p-6 rounded-2xl bg-[#f8f9fa] border-l-4 border-[#0a369d] italic text-[#0b1425] font-medium text-base">
                      &ldquo;{section.quote}&rdquo;
                    </blockquote>
                  )}

                  {section.extraText && (
                    <p className="pt-2 text-[#0b1425] font-medium">
                      {section.extraText}
                    </p>
                  )}
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Standard Site CTA */}
      <HomeLatest />

    </main>
  );
}
