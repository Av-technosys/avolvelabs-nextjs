"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  IconArrowBadgeRight,
  IconChevronDown,
  IconMenu2,
} from "@tabler/icons-react";

const Header = () => {
  const [openMobileServices, setOpenMobileServices] = useState(false);

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        
        {/* Logo */}
        <Link
          href="/"
          className="font-sans text-2xl font-bold text-blue-700 md:text-3xl"
        >
          avolvelabs
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex justify-end">
          
          <nav className="flex items-center gap-6 lg:gap-8 font-playfair font-medium text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>

            <Popover>
              <PopoverTrigger className="flex items-center gap-1 cursor-pointer">
                <span>Services</span>
                <IconChevronDown className="h-4 w-4" />
              </PopoverTrigger>

              <PopoverContent className="w-64 p-2 font-playfair">
                <Link
                  href="/services/crm-strategy-implementation"
                  className="block rounded px-4 py-2 hover:bg-gray-100"
                >
                  CRM Strategy & Implementation
                </Link>
                <Link
                  href="/services/managed-services"
                  className="block rounded px-4 py-2 hover:bg-gray-100"
                >
                  Managed Services
                </Link>
                <Link
                  href="/services/value-added-services"
                  className="block rounded px-4 py-2 hover:bg-gray-100"
                >
                  Value Added Services
                </Link>
              </PopoverContent>
            </Popover>

            <Link href="/casestudy">Case Studies</Link>
          </nav>

          {/* Contact */}
          <div className="flex flex-col items-center text-xs font-medium text-gray-700 md:flex-row md:gap-2 md:text-base font-playfair">
            <span>Contact</span>
            <span>+9351567881</span>
          </div>

          {/* Button */}
          <Link href="/contact">
            <Button className="rounded-full border-2 border-sky-500 bg-sky-500 px-7 py-6 text-base font-playfair hover:bg-white hover:text-sky-500">
              Let’s Talk
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <IconMenu2 className="text-black" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-[85%] bg-neutral-900 px-0 text-white"
            >
              <SheetHeader className="px-6 pb-8 pt-6">
                <span className="text-xl font-bold">avolvelabs</span>
              </SheetHeader>

              <nav className="flex flex-col gap-6 px-6 text-sm uppercase tracking-wide">
                <Link href="/" className="border-b border-white/10 pb-4">
                  Home
                </Link>

                <Link href="/about" className="border-b border-white/10 pb-4">
                  About
                </Link>

                <div className="border-b border-white/10 pb-4">
                  <button
                    onClick={() => setOpenMobileServices(!openMobileServices)}
                    className="flex w-full items-center justify-between"
                  >
                    SERVICES
                    <IconChevronDown
                      className={`transition-transform ${
                        openMobileServices ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openMobileServices && (
                    <div className="mt-4 flex flex-col gap-4 pl-4 text-white/80">
                      <Link href="/services/crm-strategy-implementation" className="flex items-center gap-2">
                        <IconArrowBadgeRight />
                        CRM Strategy & Implementation
                      </Link>
                      <Link href="/services/managed-services" className="flex items-center gap-2">
                        <IconArrowBadgeRight />
                        Managed Services
                      </Link>
                      <Link href="/services/value-added-services" className="flex items-center gap-2">
                        <IconArrowBadgeRight />
                        Value Added Services
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/casestudy" className="border-b border-white/10 pb-4">
                  Case Studies
                </Link>

                <Link href="/contact">
                  <Button className="mt-6 w-full rounded-full py-6 text-base">
                    Let’s Talk
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
