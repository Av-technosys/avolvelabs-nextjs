"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "@/app/pages.module.css";

type CrmTechProps = {
  title?: string;
  description?: string;
  bgClass?: string;
  orbit1?: string[];
  orbit2?: string[];
};

const techLogos: Record<string, string> = {
  OpenAI: "https://api.iconify.design/logos/openai-icon.svg",

  "Azure AI": "https://api.iconify.design/logos/microsoft-azure.svg",

  Google: "https://api.iconify.design/logos/google-icon.svg",

  Boomi:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Boomi-logo.svg",

  Llama: "https://api.iconify.design/logos/meta-icon.svg",

  LangChain:
    "https://api.iconify.design/simple-icons/langchain.svg",

  LangGraph:
    "https://brandlogos.sgp1.digitaloceanspaces.com/svg/lobehub/langgraph-color.svg",

  Claude: "https://api.iconify.design/logos/anthropic-icon.svg",
};

const positions = [
  "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
  "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2",
  "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
];

const TechNode = ({
  tech,
  position,
  reverse,
  duration,
}: {
  tech: string;
  position: string;
  reverse: boolean;
  duration: number;
}) => (
  <div className={`absolute ${position}`}>
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-2.5 py-2 shadow-[0_8px_25px_rgba(10, 54, 157,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(10, 54, 157,0.14)] sm:gap-3 sm:px-4 sm:py-3">
        <img
          src={techLogos[tech]}
          alt={`${tech} logo`}
          className="h-6 w-6 shrink-0 object-contain sm:h-8 sm:w-8"
        />

        <span className="whitespace-nowrap text-[11px] font-semibold text-[#1b2940] sm:text-[14px]">
          {tech}
        </span>
      </div>
    </motion.div>
  </div>
);

const DevOpsTech = ({
  title = "Who This Service Is For",
  description =
  "This service is designed for organizations looking to move beyond basic development practices and build a structured DevOps ecosystem that drives efficiency, collaboration, and scalable long-term growth.",
  bgClass = "bg-white",
  orbit1 = ["OpenAI", "Azure AI", "Google", "Boomi"],
  orbit2 = ["Llama", "LangChain", "LangGraph", "Claude"],
}: CrmTechProps) => {
  return (
    <section className={`${bgClass} w-full overflow-hidden px-6 pt-0 pb-20`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className={styles.sectionTitle}>
            {title}
          </h2>

          <p className={styles.sectionDesc} style={{ margin: "16px auto 0", maxWidth: "48rem" }}>
            {description}
          </p>
        </div>

        {/* Graph */}
        <div className="relative mx-auto h-[370px] w-full max-w-[900px] sm:h-[430px] md:h-[500px]">
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c5d7ff] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[480px] lg:w-[480px]"
          >
            {orbit1.map((tech, index) => (
              <TechNode
                key={tech}
                tech={tech}
                position={positions[index]}
                reverse
                duration={30}
              />
            ))}
          </motion.div>

          {/* Inner Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[155px] w-[155px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8e4ff] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[320px] lg:w-[320px]"
          >
            {orbit2.map((tech, index) => (
              <TechNode
                key={tech}
                tech={tech}
                position={positions[index]}
                reverse={false}
                duration={24}
              />
            ))}
          </motion.div>

          {/* AI Core */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className="absolute left-1/2 top-1/2 flex h-[95px] w-[95px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white/90 shadow-[0_15px_45px_rgba(10, 54, 157,0.12)] backdrop-blur-xl sm:h-[110px] sm:w-[110px] md:h-[125px] md:w-[125px] lg:h-[145px] lg:w-[145px]"
          >
            <span className="text-3xl font-bold text-[#0a369d] sm:text-4xl md:text-5xl font-serif">
              AI
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsTech;