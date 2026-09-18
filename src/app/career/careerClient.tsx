"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import GhostFibers from "@/components/GhostFibers";
import styles from "@/app/pages.module.css";

const CareerClient = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleElements, setVisibleElements] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedRole, setSelectedRole] = useState("");
  const [hoveredRole, setHoveredRole] = useState<number | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const [fileError, setFileError] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-animate-id");
            if (id) {
              setVisibleElements((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document
      .querySelectorAll("[data-animate-id]")
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];

    if (file && file.size > 5 * 1024 * 1024) {
      e.currentTarget.value = "";
      setSelectedFile(null);
      setFileError("File size too large. Please upload a file under 5MB.");
      return;
    }

    setSelectedFile(file || null);
    setFileError("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const resumeFile = formData.get("resume") as File;

    if (!resumeFile || !resumeFile.name) {
      setErrorMessage("Please upload your resume.");
      setFileError("Please upload your resume.");
      setStatus("error");
      setIsSubmitting(false);
      return;
    }

    if (resumeFile.size > 5 * 1024 * 1024) {
      setErrorMessage("File size too large. Please upload a file under 5MB.");
      setFileError("File size too large. Please upload a file under 5MB.");
      setStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        body: formData,
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setErrorMessage(
          data?.error || "Something went wrong. Please try again."
        );
        setStatus("error");
      } else {
        setStatus("success");
        form.reset();
        setSelectedRole("");
        setWordCount(0);
        setFileError("");
        setSelectedFile(null);
      }
    } catch {
      setErrorMessage(
        "Network error. Please check your internet and try again."
      );
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const roles = [
    {
      title: "Business Analyst",
      type: "Internship",
      desc: "We are looking for a Business Analyst Intern to support Salesforce projects through requirement gathering and process analysis.",
    },
    {
      title: "Java Developer",
      type: "Full time - Onsite",
      desc: "Hiring a Java Developer with hands-on experience in Core Java, Spring Boot, REST APIs, and database-driven applications.",
    },
    {
      title: "Salesforce Developer",
      type: "Full time - Onsite",
      desc: "Skilled in Apex, LWC, Flows, and Salesforce customization to build scalable CRM solutions.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Intro call",
      text: "A short chat to learn about your goals and our needs.",
    },
    {
      step: "02",
      title: "Skill interview",
      text: "Deep dive into your craft with our team.",
    },
    {
      step: "03",
      title: "Practical exercise",
      text: "A real-world prompt, scoped to be fair and fast.",
    },
    {
      step: "04",
      title: "Final fit",
      text: "Meet leadership and align on values and scope.",
    },
  ];

  return (
    <main className="bg-[#f0f8ff] text-[#09111f] selection:bg-[#072ac8] selection:text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className={styles.pageHero}>
        <div className={styles.pageHeroFibers} aria-hidden="true">
          <GhostFibers
            lightMode
            lineColor="#9bb1e8"
            glowColor="#dce9ff"
            speed={0.06}
            scale={1.5}
            rotation={12}
            rotationSpeed={0.014}
            layers={6}
            waveAmplitude={0.0065}
            waveFrequency={1.85}
            waveSpeed={0.068}
            layerSpeed={0.026}
            twist={0.032}
            twistFrequency={2.25}
            twistSpeed={0.34}
            lineFrequency={3.35}
            lineSpacing={0.76}
            lineSharpness={27}
            glowFalloff={12.5}
            glowIntensity={0.94}
            brightness={1.34}
            blueBoost={1.04}
            vignette={0}
            grain={0.005}
            dpr={1}
            fps={40}
          />
        </div>

        <div className={styles.pageHeroInner}>
          <motion.div
            className={styles.pageHeroBadge}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.45, ease: "easeOut" }}
          >
            <span className={styles.pageHeroBadgeDot} />
            Avolvelabs Careers
          </motion.div>

          <motion.h1
            className={styles.pageHeroH1}
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: reducedMotion ? 0 : 0.58, delay: reducedMotion ? 0 : 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            Build AI that{" "}
            <span className={styles.pageHeroAccent}>moves businesses.</span>
          </motion.h1>

          <motion.p
            className={styles.pageHeroDesc}
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: reducedMotion ? 0 : 0.54, delay: reducedMotion ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            We are a product-minded team designing practical AI systems for growth, automation, and insight. Join us to ship meaningful work.
          </motion.p>

          <motion.div
            className={styles.pageHeroActions}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 0.34, ease: "easeOut" }}
          >
            <a href="#open-roles" className={styles.btnPrimary}>
              View open roles <ArrowUpRight size={16} />
            </a>
            <a href="#apply" className={styles.btnGhost}>
              Apply now <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          OPEN ROLES
      ===================================================== */}
      <section
        id="open-roles"
        className="pt-12 pb-24 lg:pt-14 lg:pb-28 relative"
        style={{
          background: 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(255,255,255,0.8)',
          borderBottom: '1px solid rgba(255,255,255,0.8)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6">

          <div
            data-animate-id="roles-title"
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${visibleElements["roles-title"] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
          >
            <h2 className="text-[36px] md:text-[52px] font-[650] leading-[1.2] text-[#09111f] mb-[18px] tracking-normal" style={{ textWrap: 'balance' } as React.CSSProperties}>
              Explore Open Roles
            </h2>
            <p className="text-[14.5px] leading-[1.68] text-[#526174]">
              We are always looking for builders who love shipping and learning. Find your next challenge.
            </p>
          </div>

          <div className="border-t border-[#072ac8]/14 flex flex-col">
            {roles.map((role, idx) => (
              <div
                key={role.title}
                data-animate-id={`role-strip-${idx}`}
                onMouseEnter={() => setHoveredRole(idx)}
                onMouseLeave={() => setHoveredRole(null)}
                className={`group border-b border-[#072ac8]/14 py-10 transition-all duration-500 ease-out cursor-pointer ${visibleElements[`role-strip-${idx}`] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  } ${hoveredRole === idx ? 'px-8 -mx-8 rounded-[12px] my-1 bg-white/60 shadow-[0_12px_40px_rgba(7,42,200,0.06)] backdrop-blur-md z-10 relative border-transparent' : ''}`}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                <div className="grid lg:grid-cols-[1fr_1.5fr_auto] gap-8 items-center">
                  <div>
                    <span className={`inline-block px-[10px] py-[4px] rounded-full text-[10px] font-[700] uppercase tracking-[0.1em] mb-4 transition-colors duration-300 ${hoveredRole === idx ? 'bg-[#072ac8]/10 text-[#072ac8]' : 'bg-[#e6efff] text-[#072ac8]'}`}>
                      {role.type}
                    </span>
                    <h3 className={`text-[28px] font-[650] leading-[1.2] tracking-normal transition-colors duration-300 text-[#09111f]`}>
                      {role.title}
                    </h3>
                  </div>

                  <p className={`text-[14.5px] leading-[1.68] transition-colors duration-300 max-w-xl text-[#526174]`}>
                    {role.desc}
                  </p>

                  <div className="flex justify-start lg:justify-end">
                    <button
                      onClick={() => {
                        setSelectedRole(role.title);
                        document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`flex h-[38px] w-[38px] items-center justify-center rounded-full transition-all duration-300 ${hoveredRole === idx
                        ? 'bg-[#072ac8] text-white rotate-45 shadow-[0_4px_16px_rgba(7,42,200,0.2)]'
                        : 'bg-[rgba(255,255,255,0.82)] text-[#0a2472] border border-[rgba(7,42,200,0.14)] group-hover:bg-[#072ac8] group-hover:text-white group-hover:rotate-45'
                        }`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="py-24 lg:py-28 relative bg-[#f0f8ff] overflow-hidden">

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            <div
              data-animate-id="process-text"
              className={`transition-all duration-1000 ${visibleElements["process-text"] ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
                }`}
            >
              <h2 className="text-[36px] md:text-[52px] font-[650] leading-[1.2] text-[#09111f] mb-[18px] tracking-normal" style={{ textWrap: 'balance' } as React.CSSProperties}>
                Transparent from{' '}
                <span className="text-[#072ac8]">hello</span> to offer.
              </h2>
              <p className="text-[14.5px] leading-[1.68] text-[#526174] mb-8 max-w-md">
                We move quickly and keep communication clear at every step. Expect thoughtful feedback and a respectful experience.
              </p>

            </div>

            <div className="relative">
              <div className="absolute left-[39px] top-[40px] bottom-[40px] w-[2px] bg-[linear-gradient(180deg,transparent,rgba(7,42,200,0.22),transparent)]" />

              <div className="space-y-10">
                {process.map((item, idx) => (
                  <div
                    key={item.step}
                    data-animate-id={`process-item-${idx}`}
                    className={`relative flex gap-8 transition-all duration-700 ease-out ${visibleElements[`process-item-${idx}`] ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
                      }`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div
                      className="relative z-10 flex w-20 h-20 shrink-0 items-center justify-center rounded-full text-[21px] font-[760] text-white"
                      style={{
                        background: 'linear-gradient(135deg, rgba(20,69,222,0.92) 0%, rgba(7,42,200,0.9) 58%, rgba(86,111,245,0.86) 100%)',
                        boxShadow: '0 4px 14px rgba(7,42,200,0.1)',
                        border: '2px solid rgba(255,255,255,0.82)',
                      }}
                    >
                      {item.step}
                    </div>

                    <div
                      className="pt-4 p-6 rounded-[2rem] flex-1 transition-all hover:-translate-y-1"
                      style={{
                        background: 'rgba(255,255,255,0.54)',
                        border: '1px solid rgba(255,255,255,0.82)',
                        boxShadow: '0 24px 80px rgba(7,42,200,0.11), 0 1px 0 rgba(255,255,255,0.92) inset',
                        backdropFilter: 'blur(16px)',
                      }}
                    >
                      <h3 className="text-[22px] font-[650] leading-[1.2] text-[#09111f] mb-3 tracking-normal">{item.title}</h3>
                      <p className="text-[14.5px] leading-[1.68] text-[#526174]">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          APPLICATION
      ===================================================== */}
      <section
        id="apply"
        className={`${styles.sectionWhite} relative text-[#09111f]`}
      >

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20">

            <div
              data-animate-id="apply-info"
              className={`self-start transition-all duration-1000 ${visibleElements["apply-info"] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
            >
              <div className="mb-6">
                 <span className={`${styles.eyebrow} !text-[#072ac8]`}>Join the Team</span>
              </div>
              <h2 className="text-[36px] md:text-[52px] font-[650] leading-[1.2] tracking-normal mb-[18px]" style={{ textWrap: 'balance' } as React.CSSProperties}>
                Tell us about{' '}
                <span className="text-[#072ac8]">yourself.</span>
              </h2>

              <p className="text-[14.5px] leading-[1.68] text-[#526174] mb-10 max-w-md">
                Share your background and what you want to build next. We respond to every application within 7 days.
              </p>

              <div className="space-y-6 border-t border-[#072ac8]/14 pt-8">
                <h3 className="text-[10.5px] font-[700] uppercase tracking-[1.2px] text-[#072ac8]">What we value</h3>
                {[
                  "Clear communication and ownership",
                  "Evidence of shipped work",
                  "Curiosity about AI and systems",
                  "Ability to collaborate across disciplines",
                ].map((line) => (
                  <div key={line} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#072ac8]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#072ac8]" />
                    </div>
                    <p className="text-[14.5px] leading-[1.68] text-[#3d4b61]">{line}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM CARD */}
            <form
              onSubmit={handleSubmit}
              data-animate-id="form-card"
              className={`transition-all duration-1000 ease-out text-[#09111f] ${visibleElements["form-card"] ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
                }`}
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
                <div className="relative pt-2">
                  <label className="absolute left-0 top-0 text-[11px] font-bold uppercase tracking-wider text-[#526174]">Full Name *</label>
                  <input name="fullName" type="text" required placeholder="Enter your name"
                    className="h-[40px] mt-4 w-full border-0 border-b border-[#072ac8]/20 bg-transparent text-[15px] font-[500] text-[#09111f] placeholder:text-[#526174]/40 outline-none transition-all focus:border-[#072ac8] focus-visible:ring-0 rounded-none px-0" />
                </div>

                <div className="relative pt-2">
                  <label className="absolute left-0 top-0 text-[11px] font-bold uppercase tracking-wider text-[#526174]">Email Address *</label>
                  <input name="email" type="email" required placeholder="Enter your email"
                    className="h-[40px] mt-4 w-full border-0 border-b border-[#072ac8]/20 bg-transparent text-[15px] font-[500] text-[#09111f] placeholder:text-[#526174]/40 outline-none transition-all focus:border-[#072ac8] focus-visible:ring-0 rounded-none px-0" />
                </div>

                <div className="relative pt-2 flex w-full items-end border-b border-[#072ac8]/20 focus-within:border-[#072ac8] transition-all">
                  <label className="absolute left-0 top-0 text-[11px] font-bold uppercase tracking-wider text-[#526174]">Mobile Number *</label>
                  <select name="countryCode" defaultValue="+91"
                    className="h-[40px] mt-4 w-[70px] shrink-0 bg-transparent text-[15px] font-[500] text-[#09111f] outline-none appearance-none cursor-pointer border-none px-0">
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                  </select>
                  <input name="mobile" type="tel" inputMode="numeric" pattern="[0-9]*" maxLength={10} placeholder="00000 00000" required
                    className="h-[40px] min-w-0 w-full bg-transparent text-[15px] font-[500] text-[#09111f] placeholder:text-[#526174]/40 outline-none rounded-none border-none px-0 pl-2"
                    onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ""); }} />
                </div>

                <div className="relative pt-2">
                  <label className="absolute left-0 top-0 text-[11px] font-bold uppercase tracking-wider text-[#526174]">Current Location *</label>
                  <input name="location" type="text" required placeholder="City, Country"
                    className="h-[40px] mt-4 w-full border-0 border-b border-[#072ac8]/20 bg-transparent text-[15px] font-[500] text-[#09111f] placeholder:text-[#526174]/40 outline-none transition-all focus:border-[#072ac8] focus-visible:ring-0 rounded-none px-0" />
                </div>

                <div className="relative pt-2 sm:col-span-2">
                  <label className="absolute left-0 top-0 text-[11px] font-bold uppercase tracking-wider text-[#526174]">Role Applying For *</label>
                  <select name="role" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} required
                    className={`h-[40px] mt-4 w-full appearance-none border-0 border-b border-[#072ac8]/20 bg-transparent text-[15px] font-[500] outline-none transition-all focus:border-[#072ac8] rounded-none px-0 ${selectedRole ? 'text-[#09111f]' : 'text-[#526174]/40'}`}>
                    <option value="" disabled>Select a role...</option>
                    <option value="Java Developer" className="text-[#09111f]">Java Developer</option>
                    <option value="Salesforce Developer" className="text-[#09111f]">Salesforce Developer</option>
                    <option value="Business Analyst" className="text-[#09111f]">Business Analyst</option>
                    <option value="Other" className="text-[#09111f]">Other (Open Application)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 top-6 flex items-center text-[#526174]">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1.5L6 6.5L11 1.5" /></svg>
                  </div>
                </div>

                {selectedRole === "Other" && (
                  <div className="sm:col-span-2 relative pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <label className="absolute left-0 top-0 text-[11px] font-bold uppercase tracking-wider text-[#526174]">Specify Role *</label>
                    <input name="otherRole" type="text" required placeholder="Desired role title..."
                      className="h-[40px] mt-4 w-full border-0 border-b border-[#072ac8]/20 bg-transparent text-[15px] font-[500] text-[#09111f] placeholder:text-[#526174]/40 outline-none transition-all focus:border-[#072ac8] focus-visible:ring-0 rounded-none px-0" />
                  </div>
                )}

                <div className="sm:col-span-2 relative pt-2">
                  <label className="absolute left-0 top-0 text-[11px] font-bold uppercase tracking-wider text-[#526174]">Career Objective *</label>
                  <textarea
                    name="project"
                    required
                    placeholder="Briefly tell us what you're looking for in your next role..."
                    className="min-h-[100px] mt-4 w-full resize-y border-0 border-b border-[#072ac8]/20 bg-transparent text-[15px] font-[500] text-[#09111f] placeholder:text-[#526174]/40 outline-none transition-all focus:border-[#072ac8] focus-visible:ring-0 rounded-none px-0 py-2"
                    onChange={(e) => {
                      const words = e.target.value.trim().split(/\s+/).filter(Boolean);
                      if (words.length > 50) {
                        e.currentTarget.value = words.slice(0, 50).join(" ");
                        setWordCount(50);
                      } else {
                        setWordCount(words.length);
                      }
                    }}
                  />
                  <span className="absolute bottom-4 right-0 text-[11px] font-[600] text-[#072ac8]/60">
                    {wordCount}/50 words
                  </span>
                </div>

                <div className="sm:col-span-2 pt-2">
                  <div className="relative overflow-hidden border border-[#072ac8]/20 rounded-xl bg-white/40 transition-all focus-within:border-[#072ac8] p-5 shadow-sm">
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.docx"
                      required
                      className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                      onChange={handleFileChange}
                    />
                    <div className="flex items-center gap-4 px-2 pointer-events-none">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#072ac8]/10 text-[#072ac8]">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <path d="M17 8l-5-5-5 5" />
                          <path d="M12 3v12" />
                        </svg>
                      </div>

                      {selectedFile ? (
                        <div>
                          <p className="text-[14px] font-[650] text-[#072ac8] break-all">
                            {selectedFile.name}
                          </p>
                          <p className="mt-0.5 text-[12px] text-[#526174] font-medium">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB • Click to replace
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-[14px] font-[650] text-[#09111f]">Upload Resume / CV *</p>
                          <p className="mt-0.5 text-[12px] text-[#526174] font-medium">PDF or DOCX (Max 5MB). Drag & drop here.</p>
                        </div>
                      )}
                    </div>
                  </div>
                  {fileError && (
                    <span className="text-[12px] font-[600] text-red-600 mt-3 block px-2">
                      {fileError}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-12 flex justify-start">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative isolate flex h-[52px] min-w-[220px] items-center justify-center gap-3 overflow-hidden rounded-full text-[13px] font-[760] text-white cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_0_4px_rgba(20,69,222,0.10),0_6px_14px_rgba(7,42,200,0.16)] disabled:cursor-not-allowed disabled:opacity-70"
                  style={{
                    background: 'linear-gradient(135deg, rgba(20,69,222,0.92) 0%, rgba(7,42,200,0.9) 58%, rgba(86,111,245,0.86) 100%)',
                    border: '1px solid rgba(255,255,255,0.82)',
                  }}
                >
                  <span className="absolute inset-0 scale-0 rounded-full bg-white/10 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />

                  <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-[left,opacity] duration-700 group-hover:left-[120%] group-hover:opacity-100" />

                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? "Processing..." : "Submit Application"}
                    {!isSubmitting && (
                      <svg className="flex-none transition-transform duration-300 group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33331 8H12.6666M12.6666 8L7.99998 3.33337M12.6666 8L7.99998 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                </button>
              </div>

              {status === "success" && (
                <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center text-[14px] font-semibold text-emerald-700 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  🎉 Your application has been sent successfully. We'll be in touch!
                </div>
              )}

              {status === "error" && (
                <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5 text-center text-[14px] font-semibold text-red-600 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareerClient;