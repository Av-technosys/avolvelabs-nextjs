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
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const offices = [
  ["Jaipur", "Rajasthan, India", "India", "/images/talk1.png"],
  [
    "Frisco",
    "Texas (Dallas Fort Worth Area), U.S.A.",
    "United States",
    "/images/talk2.png",
  ],
  ["Worcester", "United Kingdom", "United Kingdom", "/images/talk3.png"],
] as const;

const contactItems = [
  {
    icon: <IconMapPin size={17} />,
    content: (
      <>
        <p className="font-semibold text-white">Avolvelabs Pvt. Ltd.</p>
        <p className="mt-0.5 text-[12px] leading-5 text-white/60">
          Jaipur, Rajasthan, India
        </p>
      </>
    ),
  },
  {
    icon: <IconPhone size={17} />,
    href: "tel:+917877727352",
    content: <p className="text-[12px] text-white/75">+91-7877727352</p>,
  },
  {
    icon: <IconMail size={17} />,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=Support@avolvelabs.com",
    content: (
      <p className="break-all text-[12px] text-white/75">
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
  <div className="space-y-2">
    <label
      htmlFor={id}
      className="text-[12px] font-semibold text-[#263650]"
    >
      {label}
      {required && " *"}
    </label>

    <div className="relative">
      <span className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#526174]">
        {icon}
      </span>

      <Input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-[50px] rounded-[9px] border-[#072ac8]/15 bg-[#f0f8ff]/80 pl-11 text-[13px] text-[#09111f] shadow-none transition-all duration-300 placeholder:text-[#526174]/65 hover:border-[#072ac8]/35 hover:bg-white focus-visible:border-[#072ac8] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#072ac8]/10"
      />
    </div>
  </div>
);

const ContactClient = () => {
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
    <main
      className="min-h-screen overflow-hidden bg-[#f0f8ff] text-[#09111f]"
      style={{
        fontFamily: 'var(--font-geist-sans), "Inter", Arial, sans-serif',
      }}
    >
      <section className="relative px-5 pb-16 pt-24 sm:px-8 md:px-12 md:pb-20 md:pt-28 lg:px-16 lg:pb-24 lg:pt-32">
        <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[#072ac8]/5 blur-[110px]" />

        <div className="relative mx-auto max-w-[1180px]">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-12 text-center"
          >
            <div className="mx-auto mb-5 h-[3px] w-14 bg-[#072ac8]" />

            <h1 className="text-[36px] font-[760] leading-[1.08] tracking-tight sm:text-[44px] md:text-[52px]">
              Let&apos;s Start a{" "}
              <span className="text-[#072ac8]">Conversation</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-[14px] leading-6 text-[#526174]">
              Fill out the form below and our team will reach out to you shortly.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden rounded-[24px] border border-white/90 bg-white/70 shadow-[0_24px_75px_rgba(7,42,200,0.1)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_30px_90px_rgba(7,42,200,0.15)]"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#072ac8] to-transparent" />

            <div className="relative p-7 sm:p-9 md:p-10 lg:p-11">
              <div className="mb-8 flex items-center justify-between border-b border-[#072ac8]/10 pb-7">
                <div>
                  <h2 className="text-2xl font-[650] text-[#09111f] md:text-[28px]">
                    Request a Call Back
                  </h2>

                  <p className="mt-2 text-[13px] text-[#526174]">
                    Our team usually responds within 24 hours.
                  </p>
                </div>

                <div className="hidden h-11 w-11 items-center justify-center rounded-xl border border-[#072ac8]/15 bg-[#072ac8]/5 sm:flex">
                  <IconMessage2 size={19} className="text-[#072ac8]" />
                </div>
              </div>

              {status.msg && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-7 flex gap-3 rounded-lg border p-3.5 text-[12px] font-medium ${
                    status.type === "success"
                      ? "border-green-200 bg-green-50 text-green-700"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {status.type === "success" ? (
                    <IconCheck size={17} />
                  ) : (
                    <IconAlertCircle size={17} />
                  )}

                  <span>{status.msg}</span>
                </motion.div>
              )}

              <form
                onSubmit={handleSubmit}
                className="grid gap-x-6 gap-y-6 md:grid-cols-3"
              >
                <Field
                  id="name"
                  label="Full Name"
                  placeholder="Enter your name"
                  required
                  icon={<IconUser size={16} />}
                />

                <Field
                  id="email"
                  label="Email Address"
                  placeholder="Enter your email"
                  required
                  type="email"
                  icon={<IconMail size={16} />}
                />

                <Field
                  id="mobile"
                  label="Phone Number"
                  placeholder="Enter phone number"
                  icon={<IconPhone size={16} />}
                />

                <Field
                  id="company"
                  label="Company Name"
                  placeholder="Enter company name"
                  icon={<IconBuilding size={16} />}
                />

                <div className="space-y-2">
                  <label
                    htmlFor="enquiryFor"
                    className="text-[12px] font-semibold text-[#263650]"
                  >
                    Subject *
                  </label>

                  <div className="relative">
                    <IconMessage2
                      size={16}
                      className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#526174]"
                    />

                    <Input
                      id="enquiryFor"
                      name="enquiryFor"
                      required
                      placeholder="How can we help?"
                      className="h-[50px] rounded-[9px] border-[#072ac8]/15 bg-[#f0f8ff]/80 pl-11 text-[13px] text-[#09111f] shadow-none transition-all duration-300 placeholder:text-[#526174]/65 hover:border-[#072ac8]/35 hover:bg-white focus-visible:border-[#072ac8] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#072ac8]/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-[12px] font-semibold text-[#263650]"
                  >
                    Message *
                  </label>

                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us more..."
                    className="min-h-[50px] resize-none rounded-[9px] border-[#072ac8]/15 bg-[#f0f8ff]/80 p-3.5 text-[13px] text-[#09111f] shadow-none transition-all duration-300 placeholder:text-[#526174]/65 hover:border-[#072ac8]/35 hover:bg-white focus-visible:border-[#072ac8] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#072ac8]/10"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="group relative isolate mt-1 flex h-[50px] w-full items-center justify-center gap-3 overflow-hidden rounded-full text-[13px] font-[760] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_4px_rgba(20,69,222,0.1),0_6px_14px_rgba(7,42,200,0.16)] disabled:cursor-not-allowed disabled:opacity-70 md:col-span-3"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(20,69,222,.92) 0%,rgba(7,42,200,.9) 58%,rgba(86,111,245,.86) 100%)",
                    border: "1px solid rgba(255,255,255,.82)",
                  }}
                >
                  <span className="absolute inset-0 scale-0 rounded-full bg-white/10 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />

                  <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-all duration-[1400ms] group-hover:left-[120%] group-hover:opacity-100" />

                  <span className="relative z-10 flex items-center gap-2">
                    {loading ? (
                      <>
                        <IconLoader2 size={17} className="animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <IconSend size={17} />
                        Send Message
                        <IconArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </span>
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Location + Map */}
          <div className="mt-7 grid items-stretch gap-6 md:grid-cols-2">
            {/* Our Location */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex min-h-[330px] overflow-hidden rounded-[24px] bg-[#0a2472] shadow-[0_22px_65px_rgba(7,42,200,0.16)]"
            >
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#566ff5]/20 blur-3xl" />

              <div className="relative flex w-full flex-col p-7 md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-[650] text-white">
                      Our Location
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                    <IconBuilding size={19} />
                  </div>
                </div>

                <h3 className="mb-6 text-[14px] font-semibold text-white/90">
                  Corporate Headquarter
                </h3>

                <div className="space-y-3">
                  {contactItems.map((item, i) => {
                    const content = (
                      <>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition-transform duration-300 group-hover:scale-105">
                          {item.icon}
                        </div>

                        {item.content}
                      </>
                    );

                    return item.href ? (
                      <Link
                        key={i}
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.05] p-3.5 transition-all duration-300 hover:bg-white/[0.09]"
                      >
                        {content}
                      </Link>
                    ) : (
                      <div
                        key={i}
                        className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.05] p-3.5 transition-all duration-300 hover:bg-white/[0.09]"
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1.1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative min-h-[330px] overflow-hidden rounded-[24px] border border-[#072ac8]/15 bg-white shadow-[0_22px_65px_rgba(7,42,200,0.12)]"
            >
              <iframe
                title="Avolvelabs Jaipur Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.382562431!2d75.7062635!3d26.8851417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full scale-[1.02] transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="border-t border-[#072ac8]/10 bg-white/70 px-5 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
        <div className="mx-auto max-w-[1180px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-9 text-3xl font-[650] leading-tight text-[#09111f] md:text-4xl"
          >
            Where To Find Us
          </motion.h2>

          <div className="grid gap-5 md:grid-cols-3">
            {offices.map(([city, subtitle, tag, image], idx) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 50, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group overflow-hidden rounded-[22px] bg-[#e8f3fc] shadow-[0_18px_50px_rgba(7,42,200,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(7,42,200,0.16)] ${
                  idx === 1 ? "md:mt-8" : ""
                }`}
              >
                <div className="relative h-[390px] overflow-hidden">
                  <Image
                    src={image}
                    alt={`${city}, ${subtitle}`}
                    fill
                    priority={idx === 0}
                    className="object-cover brightness-[.72] transition-transform duration-[1400ms] group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#072ac8]/95 via-[#072ac8]/20 to-transparent transition-all duration-700 group-hover:via-[#072ac8]/30" />

                  <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-1 md:p-7">
                    <span className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md transition-colors group-hover:bg-white/20">
                      {tag}
                    </span>

                    <h3 className="text-3xl font-[760] uppercase tracking-tight text-white">
                      {city}
                    </h3>

                    <p className="mt-1.5 max-w-[280px] text-[12px] leading-5 text-white/75">
                      {subtitle}
                    </p>
                  </div>
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