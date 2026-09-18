"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ManageWhat = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-20 pt-0 -mt-4 sm:px-8 md:pb-28 md:pt-0 md:-mt-8 lg:px-12 lg:-mt-11">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* Content - Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-3 -top-3 h-16 w-16 rounded-tl-[2rem] border-l border-t border-[#9dbaff] md:-left-5 md:-top-5" />

            <div className="relative border-l border-[#c5d7f5] pl-6 md:pl-8">
              <span className="mb-5 block font-playfair text-5xl leading-none text-[#b7caff]">
                “
              </span>

              <p className="text-[15.5px] leading-[1.72] text-[#3d4b61]">
                Salesforce is the engine of your enterprise, but maintaining it shouldn&apos;t be a full time distraction for your leadership. At Avolve Labs, we provide the technical expertise and strategic foresight required to transform a clunky database into a high-performance growth engine.

                <br />
                <br />

                We don&apos;t just close tickets we solve business bottlenecks. Our mission is to ensure your CRM evolves at the speed of your ambition.
              </p>
            </div>

            <div className="absolute -bottom-3 -right-2 h-16 w-16 rounded-br-[2rem] border-b border-r border-[#9dbaff] md:-right-4" />

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-start gap-4 pl-6 md:pl-8">
              <Link
                href="/contact"
                className="group relative inline-flex cursor-pointer items-center gap-[10px] overflow-hidden rounded-full px-[25px] py-[15px] text-[13px] font-[760] text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_0_4px_rgba(20,69,222,0.10),0_6px_14px_rgba(7,42,200,0.16)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(20,69,222,0.92) 0%, rgba(7,42,200,0.9) 58%, rgba(86,111,245,0.86) 100%)",
                  border: "1px solid rgba(255,255,255,0.82)",
                }}
              >
                <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-[left,opacity] duration-[1400ms] ease-out group-hover:left-[120%] group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-[10px]">
                  Find out more
                  <svg
                    className="flex-none transition-transform duration-300 group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33331 8H12.6666M12.6666 8L7.99998 3.33337M12.6666 8L7.99998 12.6667"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>

              <Link
                href="/case-studies"
                className="group relative inline-flex cursor-pointer items-center gap-[8px] overflow-hidden rounded-full px-[22px] py-[14px] text-[13px] font-[650] text-[#071225] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_0_4px_rgba(20,69,222,0.08),0_6px_12px_rgba(7,42,200,0.12)]"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.88), rgba(233,242,255,0.52))",
                  border: "1px solid rgba(7,42,200,0.22)",
                }}
              >
                <span className="pointer-events-none absolute inset-y-0 -left-full w-1/3 -skew-x-12 bg-[#8faeff]/20 opacity-0 transition-[left,opacity] duration-[1100ms] ease-out group-hover:left-[120%] group-hover:opacity-100" />
                <span className="relative z-10">Explore More</span>
              </Link>
            </div>
          </motion.div>

          {/* Heading - Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >
            <div className="relative pl-6 lg:pl-10">
              <span className="absolute left-2 top-2 h-16 w-1 rounded-full bg-[#072ac8] md:left-4 md:h-24" />
              <h2 className="max-w-[650px] font-playfair text-3xl font-bold leading-[1.2] text-[#0b1425] md:text-[46px]">
                Scaling Your Business,
                <br />
                <span className="text-[#072ac8]">Without the Overhead.</span>
              </h2>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ManageWhat;
