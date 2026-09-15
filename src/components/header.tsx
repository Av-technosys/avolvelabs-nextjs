"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  IconChevronDown,
  IconMenu2,
} from "@tabler/icons-react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [openMobileServices, setOpenMobileServices] = useState(false);
  const [openSheet, setOpenSheet] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 bg-transparent px-4">
      <div className="pointer-events-auto mx-auto flex h-[66px] w-full max-w-[1240px] items-center justify-between rounded-[26px] border border-white/80 bg-[#F0F8FF]/70 px-5 shadow-[0_22px_70px_rgba(7,42,200,0.12),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-14px_30px_rgba(7,42,200,0.035)] backdrop-blur-2xl md:h-[76px] md:rounded-[28px] md:px-7">
        <Link
          href="/"
          className="font-sans text-2xl font-bold text-[#072ac8] md:text-3xl"
        >
          <Image
            src="https://ik.imagekit.io/1vzspuubh/avolvelabslogo.webp"
            alt="Avolve Labs Logo"
            className="h-7 md:h-10 object-contain"
            height={80}
            width={160}
            unoptimized
          />
        </Link>

        <div className="hidden w-full items-center md:flex">
          <nav className="mx-auto flex items-center gap-4 rounded-full border border-white/70 bg-white/45 px-5 py-3 text-sm font-semibold text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.88)] backdrop-blur-xl lg:gap-9">
            <Link href="/" className="transition-colors hover:text-[#072ac8]">Home</Link>
            <Link href="/about" className="transition-colors hover:text-[#072ac8]">About</Link>

            <Popover open={openPopover} onOpenChange={setOpenPopover}>
              <PopoverTrigger className="flex cursor-pointer items-center gap-1 transition-colors hover:text-[#072ac8]">
                <span>Services</span>
                <IconChevronDown className="h-4 w-4" />
              </PopoverTrigger>

              <PopoverContent className="w-72 border-white/80 bg-white/80 p-2 shadow-2xl shadow-[#072ac8]/10 backdrop-blur-xl">
                <Link
                  href="/services/crm-strategy-implementation"
                  className="block cursor-pointer rounded-md px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-[#e6efff] hover:text-[#072ac8]"
                  onClick={() => setOpenPopover(false)}
                >
                  CRM Strategy & Implementation
                </Link>
                <Link
                  href="/services/managed-services"
                  className="block cursor-pointer rounded-md px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-[#e6efff] hover:text-[#072ac8]"
                  onClick={() => setOpenPopover(false)}
                >
                  Managed Services
                </Link>
                <Link
                  href="/services/value-added-services"
                  className="block cursor-pointer rounded-md px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-[#e6efff] hover:text-[#072ac8]"
                  onClick={() => setOpenPopover(false)}
                >
                  Value Added Services
                </Link>
                <Link
                  href="/services/devops"
                  className="block cursor-pointer rounded-md px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-[#e6efff] hover:text-[#072ac8]"
                  onClick={() => setOpenPopover(false)}
                >
                  Salesforce Devops
                </Link>
              </PopoverContent>
            </Popover>

            <Link href="/career" className="transition-colors hover:text-[#072ac8]">Career</Link>
            <Link href="/case-studies" className="transition-colors hover:text-[#072ac8]">Case Studies</Link>
          </nav>

          <div className="flex items-center gap-6">
            <Link href="/contact">
              <Button className="cursor-pointer rounded-full border border-white/80 bg-[linear-gradient(135deg,#124ce8,#072ac8_56%,#6781ff)] px-6 py-5 text-sm font-bold text-white shadow-[0_18px_38px_rgba(7,42,200,0.24),inset_0_1px_0_rgba(255,255,255,0.68),inset_0_-10px_22px_rgba(2,13,75,0.16)] backdrop-blur transition hover:border-white hover:shadow-[0_24px_50px_rgba(7,42,200,0.3),0_0_0_5px_rgba(64,93,243,0.11),inset_0_1px_0_rgba(255,255,255,0.72)]">
                Let&apos;s Talk
              </Button>
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger asChild>
              <button
                className="grid size-11 place-items-center rounded-full border border-white/80 bg-white/60 text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_12px_26px_rgba(7,42,200,0.1)] backdrop-blur"
                onClick={() => setOpenSheet(true)}
                aria-label="Open menu"
              >
                <IconMenu2 />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-[85%] border-r border-white/80 bg-[#F0F8FF]/95 px-0 text-[#072ac8] backdrop-blur-xl"
            >
              <SheetHeader className="px-6 pb-8 pt-6 flex items-start">
                <SheetTitle>
                  <Image
                    src="/avolvelabslogo.png"
                    alt="Avolve Labs Logo"
                    width={150}
                    height={40}
                    className="h-7 w-auto object-contain"
                    priority
                  />
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-6 px-6 text-sm font-semibold uppercase tracking-wide">
                <Link
                  href="/"
                  className="border-b border-[#072ac8]/20 pb-4"
                  onClick={() => setOpenSheet(false)}
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="border-b border-[#072ac8]/20 pb-4"
                  onClick={() => setOpenSheet(false)}
                >
                  About
                </Link>
                <div className="border-b border-[#072ac8]/20 pb-4">
                  <button
                    onClick={() => setOpenMobileServices(!openMobileServices)}
                    className="flex w-full items-center justify-between"
                  >
                    SERVICES
                    <IconChevronDown
                      className={`transition-transform duration-300 ${
                        openMobileServices ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openMobileServices && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 flex flex-col gap-4 pl-4 text-[#072ac8] first-letter:uppercase">
                          <Link
                            href="/services/crm-strategy-implementation"
                            className="flex items-center gap-2"
                            onClick={() => {
                              setOpenSheet(false);
                              setOpenMobileServices(false);
                            }}
                          >
                            <ChevronRight size={16} />
                            CRM Strategy & Implementation
                          </Link>

                          <Link
                            href="/services/managed-services"
                            className="flex items-center gap-2"
                            onClick={() => {
                              setOpenSheet(false);
                              setOpenMobileServices(false);
                            }}
                          >
                            <ChevronRight size={16} />
                            Managed Services
                          </Link>

                          <Link
                            href="/services/value-added-services"
                            className="flex items-center gap-2"
                            onClick={() => {
                              setOpenSheet(false);
                              setOpenMobileServices(false);
                            }}
                          >
                            <ChevronRight size={16} />
                            Value Added Services
                          </Link>
                          <Link
                            href="/services/devops"
                            className="flex items-center gap-2"
                            onClick={() => {
                              setOpenSheet(false);
                              setOpenMobileServices(false);
                            }}
                          >
                            <ChevronRight size={16} />
                            Devops
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/case-studies"
                  className="border-b border-[#072ac8]/20 pb-4"
                  onClick={() => setOpenSheet(false)}
                >
                  Case Studies
                </Link>
                <Link
                  href="/career"
                  className="border-b border-[#072ac8]/20 pb-4 font-poppins"
                  onClick={() => setOpenSheet(false)}
                >
                  Career
                </Link>

                <Link href="/contact" onClick={() => setOpenSheet(false)}>
                  <Button className="mt-6 w-full rounded-full border border-white/80 bg-[linear-gradient(135deg,#124ce8,#072ac8_56%,#6781ff)] py-6 font-bold text-white shadow-[0_18px_38px_rgba(7,42,200,0.24),inset_0_1px_0_rgba(255,255,255,0.68),inset_0_-10px_22px_rgba(2,13,75,0.16)] hover:border-white">
                    Let&apos;s Talk
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
