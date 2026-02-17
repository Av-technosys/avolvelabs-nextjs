"use client";
import Link from "next/link";
import { IconBrandLinkedin, IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[linear-gradient(to_bottom,#0B2FA0,#061C5B)] text-white">
        <div className="relative w-full">
          <div className="bg-[linear-gradient(to_bottom,#0B2FA0,)] h-[80] md:h-[100] text-white text-center relative z-0" />
          <div className="absolute top-0 left-0 w-full h-[80] bg-white rounded-b-full shadow-md shadow-white z-10" />
        </div>

        <div className="flex min-h-[20vh] md:h-[30vh] items-center justify-center px-4">
          <Link href="/">
    
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="avolve-text text-6xl cursor-pointer md:text-9xl font-extrabold tracking-tight leading-none font-sans"
            >
              avolvelabs
            </motion.p>
          </Link>
        </div>

        <div className="mx-auto max-w-11/12 border-t border-white/50" />

        <div className="px-10 py-10">
          <div className="w-full flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start gap-2">
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/avolvelabs/"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin className="h-8 w-8 hover:opacity-70 transition cursor-pointer" />
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/share/1NML27RcHE/?mibextid=wwXIfr"
                aria-label="Facebook"
              >
                <IconBrandFacebook className="h-8 w-7 hover:opacity-70 transition cursor-pointer" />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/avolvelabs/"
                aria-label="Instagram"
              >
                <IconBrandInstagram className="h-8 w-8 hover:opacity-70 transition cursor-pointer" />
              </Link>
            </div>

            
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-md text-center font-poppins">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Career", href: "/career" },
                { name: "Let's Talk", href: "/contact" },
              ].map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{ y: -8, x: 5 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="cursor-pointer"
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </div>

            <div className="text-center md:text-right text-sm text-white font-poppins opacity-80">
              <p>Proudly created in India.</p>
              <p>All Right Reserved, All Wrong Reversed.</p>
             <p className="text-md font-bold uppercase font-poppins"><Link href={"/privacy-policy"} > privacy policy</Link></p>
            </div>
          </div>
        </div>
      
      </footer>
    </>
  );
};

export default Footer;
