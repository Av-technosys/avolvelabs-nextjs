"use client";

import React, { useEffect, useState } from "react";

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
    <main
      className="overflow-hidden bg-[#f0f8ff] text-[#09111f] selection:bg-[#072ac8] selection:text-white"
      style={{ fontFamily: 'var(--font-geist-sans), "Inter", Arial, sans-serif', letterSpacing: 0 }}
    >

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative py-28 lg:py-32 px-5 sm:px-8 lg:px-12">

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div
            data-animate-id="hero-title"
            className={`grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center transition-all duration-1000 ease-out ${visibleElements["hero-title"] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
          >
            <div className="text-left">
              <div className="inline-flex items-center gap-[8px] px-[14px] py-[7px] rounded-full border border-white/86 bg-white/54 backdrop-blur-[16px] mb-[28px] shadow-[0_24px_80px_rgba(7,42,200,0.11),0_1px_0_rgba(255,255,255,0.92)_inset]">
                <span className="w-2 h-2 rounded-full bg-[#9db2df] shrink-0 shadow-[0_0_0_4px_rgba(157,178,223,0.16),0_0_16px_rgba(7,42,200,0.34)] animate-ping" />
                <span className="text-[11px] font-bold text-[#172033] tracking-normal uppercase">
                  Avolvelabs Careers
                </span>
              </div>

              <h1 className="text-[28px] md:text-[54px] font-[760] leading-none text-[#09111f] mb-[24px] tracking-normal" style={{ textWrap: 'balance' } as React.CSSProperties}>
                Build AI that
                <br />
                <span className="text-[#072ac8] pr-4">
                  moves businesses.
                </span>
              </h1>

              <p className="text-[15.5px] leading-[1.72] text-[#3d4b61] max-w-[540px] mb-[34px]">
                We are a product-minded team designing practical AI systems for growth, automation, and insight. Join us to ship meaningful work.
              </p>

              <div className="flex flex-wrap items-center justify-start gap-4 mb-[34px]">
                <a
                  href="#open-roles"
                  className="group relative inline-flex items-center gap-[10px] overflow-hidden rounded-full px-[25px] py-[15px] text-[13px] font-[760] text-white cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_0_4px_rgba(20,69,222,0.10),0_6px_14px_rgba(7,42,200,0.16)]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(20,69,222,0.92) 0%, rgba(7,42,200,0.9) 58%, rgba(86,111,245,0.86) 100%)",
                    border: "1px solid rgba(255,255,255,0.82)",
                  }}
                >
                  <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-[left,opacity] duration-[1400ms] ease-out group-hover:left-[120%] group-hover:opacity-100" />

                  <span className="relative z-10 flex items-center gap-[10px]">
                    View open roles

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
                </a>

                <a
                  href="#apply"
                  className="group relative inline-flex items-center gap-[8px] overflow-hidden rounded-full px-[22px] py-[14px] text-[13px] font-[650] text-[#071225] cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_0_4px_rgba(20,69,222,0.08),0_6px_12px_rgba(7,42,200,0.12)]"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.88), rgba(233,242,255,0.52))',
                    border: '1px solid rgba(7,42,200,0.22)',
                  }}
                >
                  <span className="pointer-events-none absolute inset-y-0 -left-full w-1/3 -skew-x-12 bg-[#8faeff]/20 opacity-0 transition-[left,opacity] duration-[1100ms] ease-out group-hover:left-[120%] group-hover:opacity-100" />

                  <span className="relative z-10">
                    Apply now
                  </span>
                </a>
              </div>
            </div>

            <div
              data-animate-id="hero-bento"
              className={`transition-all duration-1000 delay-300 ease-out ${visibleElements["hero-bento"] ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
                }`}
            >
              <div
                className="rounded-[2rem] p-8 md:p-10 text-left transition-all hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.54)',
                  border: '1px solid rgba(255,255,255,0.82)',
                  boxShadow: '0 24px 80px rgba(7,42,200,0.11), 0 1px 0 rgba(255,255,255,0.92) inset',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#072ac8]/10 flex items-center justify-center text-[#072ac8]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  </div>
                  <h3 className="text-[22px] font-[650] leading-[1.2] text-[#09111f] tracking-normal">Small, senior, high-trust.</h3>
                </div>

                <p className="text-[14.5px] leading-[1.68] text-[#3d4b61] max-w-lg">
                  We keep teams lean and highly collaborative. You will own problems end-to-end and work closely with founders, designers, and clients.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="rounded-[2rem] p-8 md:p-10 text-left text-white relative overflow-hidden group"
              style={{
                background: '#0a2472',
                boxShadow: '0 24px 80px rgba(10,36,114,0.3)',
              }}
            >
              <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-white blur-[80px] opacity-10 transition-transform group-hover:scale-150 duration-700" />
              <h3 className="text-[10.5px] font-[700] uppercase tracking-[1.2px] text-white/60 mb-[14px]">Culture</h3>
              <p className="text-[28px] font-[650] leading-[1.2] tracking-normal">Remote-first<br />& Async-friendly</p>
            </div>

            <div
              className="rounded-[2rem] p-8 md:p-10 text-left flex flex-col justify-between transition-all hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.54)',
                border: '1px solid rgba(255,255,255,0.82)',
                boxShadow: '0 24px 80px rgba(7,42,200,0.11), 0 1px 0 rgba(255,255,255,0.92) inset',
                backdropFilter: 'blur(16px)',
              }}
            >
              <h3 className="text-[10.5px] font-[700] uppercase tracking-[1.2px] text-[#072ac8] mb-[14px]">Focus</h3>
              <p className="text-[22px] font-[650] leading-[1.2] text-[#09111f]">Deep focus & Ship weekly</p>
            </div>

            <div
              className="md:col-span-2 rounded-[2rem] p-8 md:p-10 text-left flex items-end transition-all hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.54)',
                border: '1px solid rgba(255,255,255,0.82)',
                boxShadow: '0 24px 80px rgba(7,42,200,0.11), 0 1px 0 rgba(255,255,255,0.92) inset',
                backdropFilter: 'blur(16px)',
              }}
            >
              <p className="text-[28px] font-[650] leading-[1.2] text-[#09111f] tracking-normal">
                Design systems that{' '}
                <span className="text-[#072ac8]">scale</span>.
              </p>
            </div>
          </div>
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
                className={`group border-b border-[#072ac8]/14 py-10 transition-all duration-700 ease-out cursor-pointer ${visibleElements[`role-strip-${idx}`] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  } ${hoveredRole === idx ? 'px-10 -mx-10 rounded-[8px] my-2 scale-[1.02] z-10 relative' : ''}`}
                style={{
                  ...(hoveredRole === idx ? {
                    background: '#0a2472',
                    boxShadow: '0 20px 48px rgba(10,36,114,0.3)',
                  } : {}),
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                <div className="grid lg:grid-cols-[1fr_1.5fr_auto] gap-8 items-center">
                  <div>
                    <span className={`inline-block px-[10px] py-[4px] rounded-full text-[10px] font-[700] uppercase tracking-[0.1em] mb-4 transition-colors duration-500 ${hoveredRole === idx ? 'bg-white/20 text-white' : 'bg-[#e6efff] text-[#072ac8]'}`}>
                      {role.type}
                    </span>
                    <h3 className={`text-[28px] font-[650] leading-[1.2] tracking-normal transition-colors duration-500 ${hoveredRole === idx ? 'text-white' : 'text-[#09111f]'}`}>
                      {role.title}
                    </h3>
                  </div>

                  <p className={`text-[14.5px] leading-[1.68] transition-colors duration-500 max-w-xl ${hoveredRole === idx ? 'text-white/80' : 'text-[#526174]'}`}>
                    {role.desc}
                  </p>

                  <div className="flex justify-start lg:justify-end">
                    <button
                      onClick={() => {
                        setSelectedRole(role.title);
                        document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`flex h-[34px] w-[34px] items-center justify-center rounded-full transition-all duration-300 ${hoveredRole === idx
                        ? 'bg-white text-[#072ac8] rotate-45'
                        : 'bg-[rgba(255,255,255,0.82)] text-[#0a2472] border border-[rgba(7,42,200,0.14)] group-hover:bg-[#072ac8] group-hover:text-white group-hover:rotate-45'
                        }`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
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
      <section className="py-24 lg:py-28 relative bg-[#e8f3fc] overflow-hidden">

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

              <div className="hidden lg:block w-32 h-32 rounded-full border border-[#072ac8]/14 flex items-center justify-center relative bg-white/54 backdrop-blur-[16px]">
                <div className="absolute inset-2 rounded-full border border-[#072ac8]/30 animate-spin-slow" style={{ animationDuration: '10s' }} />
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-[#072ac8]/30"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
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
                        boxShadow: '0 16px 34px rgba(7,42,200,0.2)',
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
        className="py-24 lg:py-28 relative text-[#09111f]"
        style={{ background: '#f0f8ff' }}
      >

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20">

            <div
              data-animate-id="apply-info"
              className={`lg:sticky lg:top-32 self-start transition-all duration-1000 ${visibleElements["apply-info"] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
            >
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
              className={`rounded-[2.5rem] p-8 sm:p-12 transition-all duration-1000 ease-out text-[#09111f] ${visibleElements["form-card"] ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
                }`}
              style={{
                background: 'rgba(255,255,255,0.96)',
                boxShadow: '0 30px 100px rgba(7,42,200,0.16), 0 1px 0 rgba(255,255,255,0.92) inset',
              }}
            >
              <div className="mb-10">
                <p className="text-[28px] font-[650] leading-[1.2] mb-2 text-[#09111f]">Application Form</p>
                <p className="text-[13px] font-[500] text-[#526174]">All fields are required unless marked otherwise.</p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <label className="grid gap-2 text-[12px] font-[700] uppercase tracking-[0.05em] text-[#09111f]">
                  Full Name
                  <input name="fullName" type="text" required placeholder="Jane Doe"
                    className="h-[52px] w-full rounded-[8px] border border-[#072ac8]/14 bg-[#f0f8ff] px-5 text-[14px] font-[400] text-[#09111f] placeholder:text-[#526174]/60 outline-none tracking-normal transition-all focus:border-[#072ac8] focus:bg-white focus:ring-4 focus:ring-[#072ac8]/10" />
                </label>

                <label className="grid gap-2 text-[12px] font-[700] uppercase tracking-[0.05em] text-[#09111f]">
                  Email Address
                  <input name="email" type="email" required placeholder="jane@example.com"
                    className="h-[52px] w-full rounded-[8px] border border-[#072ac8]/14 bg-[#f0f8ff] px-5 text-[14px] font-[400] text-[#09111f] placeholder:text-[#526174]/60 outline-none tracking-normal transition-all focus:border-[#072ac8] focus:bg-white focus:ring-4 focus:ring-[#072ac8]/10" />
                </label>

                <label className="grid gap-2 text-[12px] font-[700] uppercase tracking-[0.05em] text-[#09111f]">
                  Mobile Number
                  <div className="flex w-full">
                    <select name="countryCode" defaultValue="+91"
                      className="h-[52px] w-[90px] shrink-0 rounded-l-[8px] border border-r-0 border-[#072ac8]/14 bg-white text-[14px] text-[#09111f] px-3 outline-none focus:border-[#072ac8]">
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+61">+61</option>
                    </select>
                    <input name="mobile" type="tel" inputMode="numeric" pattern="[0-9]*" maxLength={10} placeholder="000 000 0000" required
                      className="h-[52px] min-w-0 w-full rounded-r-[8px] border border-[#072ac8]/14 bg-[#f0f8ff] px-5 text-[14px] font-[400] text-[#09111f] placeholder:text-[#526174]/60 outline-none tracking-normal transition-all focus:border-[#072ac8] focus:bg-white focus:ring-4 focus:ring-[#072ac8]/10"
                      onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ""); }} />
                  </div>
                </label>

                <label className="grid gap-2 text-[12px] font-[700] uppercase tracking-[0.05em] text-[#09111f]">
                  Current Location
                  <input name="location" type="text" required placeholder="City, Country"
                    className="h-[52px] w-full rounded-[8px] border border-[#072ac8]/14 bg-[#f0f8ff] px-5 text-[14px] font-[400] text-[#09111f] placeholder:text-[#526174]/60 outline-none tracking-normal transition-all focus:border-[#072ac8] focus:bg-white focus:ring-4 focus:ring-[#072ac8]/10" />
                </label>

                <label className="grid gap-2 text-[12px] font-[700] uppercase tracking-[0.05em] text-[#09111f] sm:col-span-2">
                  Role Applying For
                  <div className="relative">
                    <select name="role" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} required
                      className="h-[52px] w-full appearance-none rounded-[8px] border border-[#072ac8]/14 bg-[#f0f8ff] px-5 text-[14px] font-[400] text-[#09111f] outline-none tracking-normal transition-all hover:bg-white focus:border-[#072ac8] focus:bg-white focus:ring-4 focus:ring-[#072ac8]/10 [&>option]:bg-white">
                      <option value="" disabled>Select a role</option>
                      <option value="Java Developer">Java Developer</option>
                      <option value="Salesforce Developer">Salesforce Developer</option>
                      <option value="Business Analyst">Business Analyst</option>
                      <option value="Other">Other (Open Application)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-[#526174]">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1.5L6 6.5L11 1.5" /></svg>
                    </div>
                  </div>
                </label>

                {selectedRole === "Other" && (
                  <div className="sm:col-span-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <input name="otherRole" type="text" required placeholder="Please specify your desired role"
                      className="h-[52px] w-full rounded-[8px] border border-[#072ac8]/14 bg-[#f0f8ff] px-5 text-[14px] font-[400] text-[#09111f] placeholder:text-[#526174]/60 outline-none tracking-normal transition-all focus:border-[#072ac8] focus:ring-4 focus:ring-[#072ac8]/10" />
                  </div>
                )}

                <label className="grid gap-2 text-[12px] font-[700] uppercase tracking-[0.05em] text-[#09111f] sm:col-span-2">
                  Career Objective (Max 50 words)
                  <textarea
                    name="project"
                    required
                    placeholder="Tell us what you're looking for in your next role..."
                    className="min-h-[140px] resize-y rounded-[8px] border border-[#072ac8]/14 bg-[#f0f8ff] p-5 text-[14px] font-[400] text-[#09111f] placeholder:text-[#526174]/50 outline-none tracking-normal transition-all hover:bg-white focus:border-[#072ac8] focus:bg-white focus:ring-4 focus:ring-[#072ac8]/10"
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
                  <span className="text-right text-[12px] font-[500] text-[#526174]">
                    {wordCount}/50 words
                  </span>
                </label>

                <label className="grid gap-2 text-[12px] font-[700] uppercase tracking-[0.05em] text-[#09111f] sm:col-span-2">
                  Resume / CV (PDF or DOCX, Max 5MB)

                  <div className="relative overflow-hidden rounded-[8px] border-2 border-dashed border-[#072ac8]/20 bg-[#f0f8ff] transition-all hover:border-[#072ac8] hover:bg-[#e6efff] focus-within:border-[#072ac8] focus-within:bg-[#e6efff]">
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.docx"
                      required
                      className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                      onChange={handleFileChange}
                    />

                    <div className="flex flex-col items-center justify-center gap-3 p-10 text-center pointer-events-none">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#072ac8] shadow-[0_4px_16px_rgba(7,42,200,0.1)]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <path d="M17 8l-5-5-5 5" />
                          <path d="M12 3v12" />
                        </svg>
                      </div>

                      {selectedFile ? (
                        <div>
                          <p className="text-[14px] font-[600] text-[#072ac8] break-all">
                            {selectedFile.name}
                          </p>
                          <p className="mt-1 text-[12px] text-[#526174] font-normal">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                          <p className="mt-2 text-[11px] text-[#526174] font-normal">
                            Click to replace file
                          </p>
                        </div>
                      ) : (
                        <div>
                          <span className="text-[14px] font-[600] text-[#072ac8]">Click to upload</span>
                          <span className="text-[14px] text-[#526174]"> or drag and drop</span>
                          <p className="mt-1 text-[12px] text-[#526174] font-normal">PDF or DOCX (max. 5MB)</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {fileError && (
                    <span className="text-[12px] font-[500] text-red-600">
                      {fileError}
                    </span>
                  )}
                </label>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative isolate flex h-[52px] w-full items-center justify-center gap-3 overflow-hidden rounded-full text-[13px] font-[760] text-white cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_0_4px_rgba(20,69,222,0.10),0_6px_14px_rgba(7,42,200,0.16)] disabled:cursor-not-allowed disabled:opacity-70"
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
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center text-sm font-semibold text-emerald-700 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  🎉 Your application has been sent successfully. We'll be in touch!
                </div>
              )}

              {status === "error" && (
                <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-center text-sm font-semibold text-red-600 animate-in fade-in slide-in-from-bottom-2 duration-500">
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