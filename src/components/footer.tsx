import Link from "next/link";
import { IconBrandLinkedin, IconBrandInstagram } from "@tabler/icons-react";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[linear-gradient(to_bottom,#0B2FA0,#061C5B)] 
text-white">
        <div className="relative w-full">
          <div className="bg-[linear-gradient(to_bottom,#0B2FA0,)]
 h-[80] md:h-[100] text-white text-center relative z-0" />
          <div className="absolute top-0 left-0 w-full h-[80] bg-white rounded-b-full shadow-md shadow-white z-10" />
        </div>
        <div className="flex min-h-[30vh] md:h-[40vh] items-center justify-center px-4">
          <h1 className="text-[18vw] md:text-[7vw] font-extrabold tracking-tight leading-none font-sans">
            avolvelabs
          </h1>
        </div>

        <div className="mx-auto max-w-11/12 border-t border-white/50" />

        <div className=" px-10 py-10">
          <div className=" w-full flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start gap-2">
              <Link href="#" aria-label="LinkedIn">
                <IconBrandLinkedin className="h-8 w-8 hover:opacity-70 transition" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <IconBrandInstagram className="h-8 w-8 hover:opacity-70 transition" />
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-x-9 gap-y-3 text-md text-center font-poppins">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/casestudy">Case Studies</Link>
              <Link href="/contact">Let&apos;s Talk</Link>
            </div>

            <div className="text-center md:text-right text-sm text-white font-poppins">
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
