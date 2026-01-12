import Link from "next/link";
import { IconBrandLinkedin, IconBrandInstagram } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="flex h-[70vh] items-center justify-center">
        <h1 className="text-[14vw] font-extrabold leading-none tracking-tight">
          avolvelabs
        </h1>
      </div>

      <div className="border-t border-white/20" />

      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="LinkedIn">
              <IconBrandLinkedin className="h-6 w-6 text-white hover:opacity-70 transition" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <IconBrandInstagram className="h-6 w-6 text-white hover:opacity-70 transition" />
            </Link>
          </div>

          <nav className="flex flex-wrap justify-center gap-8 text-sm text-white">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services/crm-strategy-implementation">
              CRM Strategy & Implementation
            </Link>
            <Link href="/services/managed-services">Managed Services</Link>
            <Link href="/services/value-added-services">
              Value Added Services
            </Link>
            <Link href="/casestudy">Case Studies</Link>
          </nav>
        </div>

        <div className="mt-10 text-center text-sm text-white">
          <p>Proudly created in India.</p>
          <p>All Right Reserved, All Wrong Reversed.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
