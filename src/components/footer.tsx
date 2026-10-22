"use client";

import Link from "next/link";
import Image from "next/image";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Career", href: "/career" },
  { name: "Let's Talk", href: "/contact" },
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
    <footer className="relative bg-[#141b41] pt-20 pb-8 flex flex-col items-center justify-between min-h-[320px]">
      {/* Huge Centered Logo with Subtle Bottom Fade */}
      <div className="relative w-full px-6 flex justify-center items-center flex-1 mb-16">
        <Link href="/" className="inline-block cursor-pointer">
          <Image
            src="/Footer_logo.png"
            alt="AvolveLabs"
            width={814}
            height={145}
            className="w-[85vw] md:w-[75vw] lg:w-[65vw] max-w-[1200px] h-auto object-contain select-none"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
            }}
            priority
          />
        </Link>
      </div>

      {/* Bottom Section */}
      <div className="w-full px-6 lg:px-12">
        <div className="w-full h-px bg-white/[0.15] mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] uppercase tracking-widest text-[#dee2e6]">

          {/* Left: Socials */}
          <div className="flex items-center gap-4 w-full md:w-1/3 justify-center md:justify-start">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  target="_blank"
                  href={item.href}
                  aria-label={item.label}
                  className="transition hover:text-white"
                >
                  <Icon className="w-6 h-6" stroke={1.5} />
                </Link>
              );
            })}
          </div>

          {/* Middle: Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 w-full md:w-1/3">
            {footerLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition hover:text-white whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right: Copyright */}
          <div className="flex flex-col items-center md:items-end text-right w-full md:w-1/3 gap-1">
            <span>Proudly created in India.</span>
            <span>All Right Reserved, All Wrong Reversed.</span>
            <Link href="/privacy-policy" className="mt-1 font-semibold transition hover:text-white">
              PRIVACY POLICY
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
