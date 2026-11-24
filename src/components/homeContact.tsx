"use client";

import React, { useState } from "react";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconLoader2,
  IconUser,
  IconBuilding,
  IconMessage2,
  IconCheck,
  IconAlertCircle,
} from "@tabler/icons-react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import styles from "@/app/home.module.css";

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
  <div className="group relative pt-1">
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
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full h-[40px] rounded-none border-0 border-b border-[#0a369d]/20 bg-transparent px-0 pl-8 text-[14px] sm:text-[15px] font-medium text-[#09111f] shadow-none outline-none transition-all duration-300 placeholder:text-[#526174]/40 focus:border-[#0a369d]"
      />
    </div>
  </div>
);

export default function HomeContact() {
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
          msg: result.msg || "Message sent successfully! We will get back to you shortly.",
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
        msg: "Could not connect to server. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-white/70 via-[#f0f6fd] to-[#e8f2fc] py-14 sm:py-16 md:py-24 overflow-hidden">
      {/* Soft ambient lighting */}
      <div className="absolute top-1/4 left-1/6 w-72 sm:w-96 h-72 sm:h-96 bg-[#0a369d]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-72 sm:w-96 h-72 sm:h-96 bg-[#405df3]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-[min(1240px,calc(100%-36px))] sm:w-[min(1240px,calc(100%-48px))] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side: Contact Info (Direct without white card container, vertically centered) */}
          <div className="lg:col-span-5 lg:self-center space-y-6 sm:space-y-7 py-2 sm:py-4">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl border border-[#0a369d]/15 bg-white flex items-center justify-center text-[#0a369d] shadow-sm shrink-0">
                <IconMapPin size={22} />
              </div>
              <div>
                <h4 className="text-[16px] sm:text-[17px] font-[750] text-[#09111f] leading-snug">
                  Avolvelabs Pvt. Ltd.
                </h4>
                <p className="mt-1 text-[13.5px] sm:text-[14.5px] text-[#526174]">
                  Jaipur, Rajasthan, India
                </p>
              </div>
            </div>

            <div className="border-b border-[#0a369d]/12" />

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl border border-[#0a369d]/15 bg-white flex items-center justify-center text-[#0a369d] shadow-sm shrink-0">
                <IconPhone size={22} />
              </div>
              <div>
                <a
                  href="tel:+917877727352"
                  className="text-[15px] sm:text-[16px] font-[500] text-[#526174] hover:text-[#0a369d] transition-colors"
                >
                  +91-7877727352
                </a>
              </div>
            </div>

            <div className="border-b border-[#0a369d]/12" />

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl border border-[#0a369d]/15 bg-white flex items-center justify-center text-[#0a369d] shadow-sm shrink-0">
                <IconMail size={22} />
              </div>
              <div>
                <a
                  href="mailto:support@avolvelabs.com"
                  className="text-[15px] sm:text-[16px] font-[500] text-[#526174] hover:text-[#0a369d] transition-colors break-all"
                >
                  support@avolvelabs.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Request a Call Back Form */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-[750] text-[#09111f] text-center mb-6 sm:mb-8 tracking-tight">
              Request a Call Back.
            </h2>

            {status.msg && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 sm:mb-8 flex gap-3 rounded-lg p-3.5 sm:p-4 text-[13px] font-medium ${
                  status.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {status.type === "success" ? (
                  <IconCheck size={18} className="mt-0.5 shrink-0" />
                ) : (
                  <IconAlertCircle size={18} className="mt-0.5 shrink-0" />
                )}
                <span>{status.msg}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-10 gap-y-5 sm:gap-y-6 md:gap-y-7">
                <Field
                  id="name"
                  label="FULL NAME"
                  placeholder="Enter your name"
                  required
                  icon={<IconUser size={18} />}
                />
                <Field
                  id="email"
                  label="EMAIL ADDRESS"
                  placeholder="Enter your email"
                  required
                  type="email"
                  icon={<IconMail size={18} />}
                />
                <Field
                  id="mobile"
                  label="PHONE NUMBER"
                  placeholder="Enter phone number"
                  icon={<IconPhone size={18} />}
                />
                <Field
                  id="company"
                  label="COMPANY NAME"
                  placeholder="Enter company name"
                  icon={<IconBuilding size={18} />}
                />
              </div>

              <Field
                id="enquiryFor"
                label="SUBJECT"
                placeholder="How can we help?"
                required
                icon={<IconMessage2 size={18} />}
              />

              <div className="group relative pt-1">
                <label
                  htmlFor="message"
                  className="text-[11px] font-bold uppercase tracking-wider text-[#526174] transition-colors group-focus-within:text-[#0a369d]"
                >
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us more about your project..."
                  className="mt-2 w-full resize-none rounded-none border-0 border-b border-[#0a369d]/20 bg-transparent p-0 text-[14px] sm:text-[15px] font-medium text-[#09111f] shadow-none outline-none transition-all duration-300 placeholder:text-[#526174]/40 focus:border-[#0a369d]"
                />
              </div>

              <div className="pt-3 sm:pt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`${styles.sendBtn} disabled:opacity-60`}
                  style={{
                    backgroundColor: "#174bb0",
                    background: "#174bb0",
                    color: "#ffffff",
                  }}
                >
                  {loading ? (
                    <>
                      <IconLoader2 size={18} className="animate-spin text-white" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowUpRight size={18} className="text-white stroke-[2.5]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
