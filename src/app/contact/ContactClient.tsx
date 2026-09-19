"use client";

import React, { useState } from "react";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconSend,
  IconLoader2,
  IconUser,
  IconBuilding,
  IconMessage2,
  IconArrowRight,
  IconCheck,
  IconAlertCircle,
} from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import styles from "@/app/pages.module.css";

const offices = [
  ["Jaipur", "Rajasthan, India", "INDIA", "/images/talk1.png"],
  [
    "Frisco",
    "Texas (Dallas Fort Worth Area), U.S.A.",
    "UNITED STATES",
    "/images/talk2.png",
  ],
  ["Worcester", "United Kingdom", "UNITED KINGDOM", "/images/talk3.png"],
] as const;

const contactItems = [
  {
    icon: <IconMapPin size={22} className="text-[#0a369d]" />,
    content: (
      <>
        <p className="text-[17px] font-[760] text-[#09111f]">Avolvelabs Pvt. Ltd.</p>
        <p className="mt-1 text-[14.5px] leading-relaxed text-[#526174]">
          Jaipur, Rajasthan, India
        </p>
      </>
    ),
  },
  {
    icon: <IconPhone size={22} className="text-[#0a369d]" />,
    href: "tel:+917877727352",
    content: <p className="text-[16px] font-[500] text-[#526174]">+91-7877727352</p>,
  },
  {
    icon: <IconMail size={22} className="text-[#0a369d]" />,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=Support@avolvelabs.com",
    content: (
      <p className="break-all text-[16px] font-[500] text-[#526174]">
        support@avolvelabs.com
      </p>
    ),
  },
];

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  required?: boolean;
  type?: string;
};

const Field = ({
  id,
  label,
  placeholder,
  icon,
  required,
  type = "text",
}: FieldProps) => (
  <div className="group relative pt-2">
    <label
      htmlFor={id}
      className="text-[11px] font-bold uppercase tracking-wider text-[#526174] transition-colors group-focus-within:text-[#0a369d]"
    >
      {label} {required && "*"}
    </label>
    <div className="relative mt-2">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[#526174] transition-colors group-focus-within:text-[#0a369d]">
        {icon}
      </div>
      <Input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-[40px] rounded-none border-0 border-b border-[#0a369d]/20 bg-transparent px-0 pl-9 text-[15px] font-medium text-[#09111f] shadow-none outline-none transition-all duration-300 placeholder:text-[#526174]/40 focus-visible:border-[#0a369d] focus-visible:ring-0"
      />
    </div>
  </div>
);

const ContactClient = () => {
  const reducedMotion = useReducedMotion();
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    msg: string;
  }>({ type: null, msg: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: "" });

    try {
      const data = Object.fromEntries(new FormData(e.currentTarget).entries());

      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const contentType = response.headers.get("content-type");

      const result = contentType?.includes("application/json")
        ? await response.json()
        : { msg: await response.text() };

      if (response.ok) {
        setStatus({
          type: "success",
          msg: result.msg || "Message sent successfully!",
        });

        e.currentTarget.reset();
      } else {
        setStatus({
          type: "error",
          msg: result.msg || "Server returned an error. Please try again.",
        });
      }
    } catch (error) {
      console.error("Fetch Error:", error);

      setStatus({
        type: "error",
        msg: "Could not connect to server. Please check your internet or API route.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#f0f8ff] text-[#09111f] selection:bg-[#0a369d] selection:text-white">
      {/* Hero Section */}
      <section className="bg-[#f0f8ff] relative z-10 pt-40 pb-16 md:pt-48 md:pb-20 lg:pt-[220px] lg:pb-[100px]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 lg:gap-24 items-start">
            
            {/* Left side: Heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.58, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={styles.pageHeroH1}
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Let&apos;s Start a <br className="hidden md:block"/><span className={styles.pageHeroAccent}>Conversation.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.54, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={styles.pageHeroDesc}
              >
                Ready to transform your CRM experience? Connect with our experts
                and discover how Avolvelabs can drive measurable growth for your
                business.
              </motion.p>
            </div>

            {/* Right side: Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:pl-10 divide-y divide-[#dde6f5]"
            >
              {contactItems.map((item, i) => {
                const content = (
                  <div className="flex items-center gap-4 py-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white border border-[#0a369d]/10 shadow-[0_2px_8px_rgba(10, 54, 157,0.07)]">
                      {item.icon}
                    </div>
                    <div>{item.content}</div>
                  </div>
                );

                return item.href ? (
                  <Link
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    className="group block hover:opacity-75 transition-opacity duration-200"
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={i}>
                    {content}
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white px-6 py-20 lg:py-28 relative">
        <div className="mx-auto w-[min(900px,calc(100%-40px))]">
          <div className="mb-14">
            <div className={styles.sectionHeadCenter}>
               <span className={`${styles.eyebrow} !text-[#0a369d] !font-[800] uppercase tracking-[1.5px]`}>REACH OUT</span>
               <h2 className={styles.sectionTitle}>
                 Request a <span className={styles.sectionAccent}>Call Back.</span>
               </h2>
            </div>
          </div>

          {status.msg && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-10 flex gap-3 rounded-lg p-4 text-[13px] font-medium ${
                status.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {status.type === "success" ? (
                <IconCheck size={18} className="mt-0.5" />
              ) : (
                <IconAlertCircle size={18} className="mt-0.5" />
              )}
              <span>{status.msg}</span>
            </motion.div>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid gap-x-12 gap-y-10 md:grid-cols-2"
          >
            <Field
              id="name"
              label="Full Name"
              placeholder="Enter your name"
              required
              icon={<IconUser size={18} />}
            />
            <Field
              id="email"
              label="Email Address"
              placeholder="Enter your email"
              required
              type="email"
              icon={<IconMail size={18} />}
            />
            <Field
              id="mobile"
              label="Phone Number"
              placeholder="Enter phone number"
              icon={<IconPhone size={18} />}
            />
            <Field
              id="company"
              label="Company Name"
              placeholder="Enter company name"
              icon={<IconBuilding size={18} />}
            />

            <div className="md:col-span-2">
              <Field
                id="enquiryFor"
                label="Subject"
                placeholder="How can we help?"
                required
                icon={<IconMessage2 size={18} />}
              />
            </div>

            <div className="group relative pt-2 md:col-span-2">
              <label
                htmlFor="message"
                className="text-[11px] font-bold uppercase tracking-wider text-[#526174] transition-colors group-focus-within:text-[#0a369d]"
              >
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Tell us more about your project..."
                className="mt-3 min-h-[120px] resize-none rounded-none border-0 border-b border-[#0a369d]/20 bg-transparent p-0 text-[15px] font-medium text-[#09111f] shadow-none outline-none transition-all duration-300 placeholder:text-[#526174]/40 focus-visible:border-[#0a369d] focus-visible:ring-0"
              />
            </div>

            <div className="mt-6 flex justify-center md:col-span-2">
              <Button
                type="submit"
                disabled={loading}
                className={styles.btnPrimary}
              >
                {loading ? (
                  <>
                    <IconLoader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <IconSend size={18} />
                    Send Message
                    <IconArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Offices Section */}
      <section className="bg-white px-6 py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))]">

          {/* Header */}
          <div className={`${styles.sectionHeadCenter} mb-14`}>
            <span className={`${styles.eyebrow} !text-[#0a369d] !font-[800]`}>REACH US</span>
            <h2 className={styles.sectionTitle}>
              Where To Find <span className={styles.sectionAccent}>Us.</span>
            </h2>
          </div>

          {/* Rows with dividers */}
          <div className="divide-y divide-[#e8eef8]">
            {offices.map(([city, subtitle, tag, image], idx) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[56px_1fr_260px] items-center gap-6 py-9 md:py-10"
              >
                {/* Index */}
                <span className="text-[11px] font-[800] text-[#0a369d]/25 tracking-[1px] tabular-nums">
                  0{idx + 1}
                </span>

                {/* City info */}
                <div>
                  <span className="text-[10.5px] font-[800] uppercase tracking-[1.8px] text-[#0a369d] block mb-1.5">
                    {tag}
                  </span>
                  <h3 className="text-[26px] md:text-[32px] font-[760] text-[#09111f] leading-none tracking-tight">
                    {city}
                  </h3>
                  <p className="text-[13.5px] text-[#526174] mt-2 leading-relaxed">
                    {subtitle}
                  </p>
                </div>

                {/* Image — natural, no bg container */}
                <div className="hidden md:block relative h-[110px] w-[260px] overflow-hidden rounded-[14px]">
                  <Image
                    src={image}
                    alt={`${city}, ${subtitle}`}
                    fill
                    priority={idx === 0}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
};

export default ContactClient;