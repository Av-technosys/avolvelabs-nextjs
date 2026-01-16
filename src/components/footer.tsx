import Link from "next/link";
import { IconBrandLinkedin, IconBrandInstagram } from "@tabler/icons-react";


const Footer = () => {
  return (
   <>
 
    <footer className="max-w-7xl mx-auto bg-black text-white">

      <div className="flex min-h-[30vh] md:h-[40vh] items-center justify-center px-4">
        <h1 className="text-[18vw] md:text-[7vw] font-extrabold tracking-tight leading-none">
          avolvelabs
        </h1>
      </div>

  <div className="mx-auto max-w-6xl border-t border-white/50" />

 
      <div className=" px-10 py-10">
        <div className=" max-w-6xl mx-auto flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          
 
          <div className="flex justify-center md:justify-start gap-6">
            <Link href="#" aria-label="LinkedIn">
              <IconBrandLinkedin className="h-8 w-8 hover:opacity-70 transition" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <IconBrandInstagram className="h-8 w-8 hover:opacity-70 transition" />
            </Link>
          </div>

  
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 text-xs text-center">
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
          </div>

  
          <div className="text-center md:text-right text-sm text-white">
            <p>Proudly created in India.</p>
            <p>All Right Reserved, All Wrong Reversed.</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
