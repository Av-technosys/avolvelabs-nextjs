"use client";

import { useState } from "react";

const items = [
  {
    title: "Deep Dive Architecture Audit Report",
    desc:
      "A rare combination of deep integration experience and cutting-edge AI innovation, enabling intelligent automation across Boomi, Google Cloud, and beyond.",
  },
  {
    title: "Role Based Training Playbooks",
    desc:
      "Accelerate your journey with a focused strategy session that identifies use cases, assesses readiness, and lays out a roadmap aligned with your goals.",
  },
  {
    title: "User Adoption Dashboards",
    desc:
      "We work as your innovation partner, rapidly prototyping agents with your team and transferring knowledge through hands-on collaboration and enablement.",
  },
  {
    title: "Quarterly ROI Improvement Roadmap",
    desc:
      "Backed by our experience in enterprise architecture, we guide you toward scalable, secure AI system designs, selecting the right tools, models, and deployment patterns.",
  },
] as const;

type DeliverableItem = (typeof items)[number];

interface DeliverableCardProps {
  item: DeliverableItem;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

const DeliverableCard = ({
  item,
  index,
  isExpanded,
  onToggle,
}: DeliverableCardProps) => {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="group border-t border-[#d9dfe8] transition-colors duration-300 hover:border-[#3291B6]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={`deliverable-desc-${index}`}
        className="flex w-full items-start gap-4 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3291B6] focus-visible:ring-offset-4 sm:gap-6 sm:py-8"
      >
        {/* Content */}
        <div className="min-w-0 flex-1">
          <h3 className="pr-4 font-playfair text-xl font-bold leading-[1.3] text-[#032d60] sm:text-2xl">
            {item.title}
          </h3>

          <div
            id={`deliverable-desc-${index}`}
            className="grid transition-[grid-template-rows,opacity] duration-500 ease-out"
            style={{
              gridTemplateRows: isExpanded ? "1fr" : "0fr",
              opacity: isExpanded ? 1 : 0,
            }}
          >
            <div className="min-h-0 overflow-hidden">
              <p className="pt-4 font-poppins text-sm leading-[1.7] text-[#526b91] sm:text-[15px]">
                {item.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Toggle Icon */}
        <span
          className="mt-1 shrink-0 text-[#9ba8b9] transition-transform duration-300 group-hover:text-[#3291B6]"
          style={{
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
          }}
          aria-hidden="true"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
    </article>
  );
};

const ValueWhyPartner = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white px-6 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
          <h2 className="font-playfair text-3xl font-bold leading-tight text-[#0b1425] md:text-[42px]">
            What We{" "}
            <span className="text-[#072ac8]">Deliver</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl font-poppins text-[15.5px] leading-[1.72] text-[#3d4b61]">
            From strategy to deployment – your end-to-end partner for
            scalable, production-ready solutions
          </p>
        </div>

        {/* Deliverable Items */}
        <div
          className="mx-auto max-w-6xl"
          role="region"
          aria-label="Deliverable items"
        >
          {items.map((item, index) => (
            <DeliverableCard
              key={item.title}
              item={item}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => toggleCard(index)}
            />
          ))}

          <div className="border-t border-[#d9dfe8]" />
        </div>
      </div>
    </section>
  );
};

export default ValueWhyPartner;