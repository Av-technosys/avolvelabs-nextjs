"use client";

import Link from "next/link";
import Image from "next/image";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconArrowUpRight,
} from "@tabler/icons-react";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services/crm-strategy-implementation" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/avolvelabs/",
    icon: IconBrandLinkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1NML27RcHE/?mibextid=wwXIfr",
    icon: IconBrandFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/avolvelabs/",
    icon: IconBrandInstagram,
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#06184d] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.45] to-transparent" />
      <div className="absolute left-1/2 top-0 h-48 w-[72rem] -translate-x-1/2 rounded-full bg-[#072ac8]/[0.18] blur-3xl" />

      <div className="relative mx-auto w-[min(1200px,calc(100%-40px))] py-14 md:py-[72px]">
        <div className="grid gap-10 border-b border-white/[0.14] pb-10 md:grid-cols-[1.2fr_0.8fr_1fr] md:items-start">
          <div>
            <Link
              href="/"
              className="inline-flex rounded-2xl border border-white/[0.22] bg-white px-5 py-3 shadow-[0_22px_60px_rgba(0,0,0,0.22),0_0_0_6px_rgba(255,255,255,0.045)] transition hover:-translate-y-0.5 hover:shadow-[0_28px_72px_rgba(0,0,0,0.28),0_0_0_7px_rgba(255,255,255,0.06)]"
              aria-label="AvolveLabs home"
            >
              <Image
                src="/avolvelabslogo.png"
                alt="AvolveLabs"
                width={190}
                height={42}
                className="h-9 w-auto object-contain"
                priority={false}
              />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/[0.68]">
              CRM, automation, and AI systems for teams that want cleaner operations
              and measurable growth.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm font-medium text-white/[0.72]">
            {footerLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group inline-flex w-fit items-center gap-2 transition-colors hover:text-white"
              >
                {item.name}
                <IconArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </Link>
            ))}
          </nav>

          <div className="md:text-right">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.18] bg-white/[0.10] px-5 py-3 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur transition hover:border-white/[0.35] hover:bg-white/[0.14]"
            >
              Start a Project
              <IconArrowUpRight className="h-4 w-4" />
            </Link>

            <div className="mt-6 flex gap-3 md:justify-end">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    target="_blank"
                    href={item.href}
                    aria-label={item.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.16] bg-white/[0.08] text-white/[0.76] transition hover:-translate-y-0.5 hover:border-white/[0.32] hover:bg-white/[0.12] hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-white/[0.56] md:flex-row md:items-center md:justify-between">
          <p>Proudly created in India.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>All Right Reserved, All Wrong Reversed.</span>
            <Link href="/privacy-policy" className="font-semibold text-white/[0.76] transition hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
