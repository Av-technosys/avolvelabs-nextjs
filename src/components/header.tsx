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
import Image from "next/image";
import { ChevronRight, ChevronRightCircle } from "lucide-react";

const Header = () => {
  const [openMobileServices, setOpenMobileServices] = useState(false);
  const [openSheet, setOpenSheet] = useState(false); // ✅ added

  const [openPopover, setOpenPopover] = useState(false);

  return (
    <header className="border-b bg-white">
      <div className="flex w-full items-center justify-between px-4 py-4 md:px-6">
        <Link
          href="/"
          className="font-sans text-2xl font-bold text-blue-700 md:text-3xl"
        >
          <Image
            src="/avolvelabslogo.png"
            alt="Avolve Labs Logo"
            className="h-7 md:h-10  object-contain"
            height={80}
            width={160}
          />
        </Link>

        <div className="hidden w-full items-center md:flex">
          <nav className="mx-auto flex  items-center gap-4 lg:gap-12 lg:text-md md:text-md font-poppins font-medium text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>

            <Popover open={openPopover} onOpenChange={setOpenPopover}>
              <PopoverTrigger className="flex items-center gap-1 cursor-pointer">
                <span>Services</span>
                <IconChevronDown className="h-4 w-4" />
              </PopoverTrigger>

              <PopoverContent className="w-64 p-2 font-poppins ">
                <Link
                  href="/services/crm-strategy-implementation"
                  className="block rounded px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setOpenPopover(false)}
                >
                  CRM Strategy & Implementation
                </Link>
                <Link
                  href="/services/managed-services"
                  className="block rounded px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setOpenPopover(false)}
                >
                  Managed Services
                </Link>
                <Link
                  href="/services/value-added-services"
                  className="block rounded px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setOpenPopover(false)}
                >
                  Value Added Services
                </Link>
              </PopoverContent>
            </Popover>

            <Link href="/case-studies">Case Studies</Link>
          </nav>

          <div className="flex items-center gap-6">
            <Link href="/contact">
              <Button className="cursor-pointer rounded-full border-2 border-[#003E9C] bg-[#003E9C] px-5 py-5 text-base font-poppins hover:bg-white hover:text-[#003E9C]">
                Let&apos;s Talk
              </Button>
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger asChild>
              <button className="flex" onClick={() => setOpenSheet(true)}>
                <IconMenu2 className="text-black" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-[85%]  bg-white  px-0 text-[#003E9C]"
            >
              <SheetHeader className="px-6 pb-8 pt-6 flex items-start">
                <Image
                  src="/avolvelabslogo.png"
                  alt="Avolve Labs Logo"
                  width={50}
                  height={10}
                  className="h-7 w-auto object-contain"
                  priority
                />
              </SheetHeader>

              <nav className="flex flex-col gap-6 px-6 text-sm uppercase tracking-wide font-poppins">
                <Link
                  href="/"
                  className="border-b border-[#003E9C]/20 pb-4"
                  onClick={() => setOpenSheet(false)}
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="border-b border-[#003E9C]/20 pb-4"
                  onClick={() => setOpenSheet(false)}
                >
                  About
                </Link>

                <div className="border-b border-[#003E9C]/20 pb-4">
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
                    <div className="mt-4 flex flex-col gap-4 pl-4 text-[#003E9C] font-poppins">
                      <Link
                        href="/services/crm-strategy-implementation"
                        className="flex items-center gap-2"
                        onClick={() => {
                          setOpenSheet(false);
                          setOpenMobileServices(false);
                        }}
                      >
                        <ChevronRight />
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
                       <ChevronRight />
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
                       <ChevronRight />
                        Value Added Services
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/case-studies"
                  className="border-b border-[#003E9C]/20 pb-4 font-poppins"
                  onClick={() => setOpenSheet(false)}
                >
                  Case Studies
                </Link>

                <Link href="/contact" onClick={() => setOpenSheet(false)}>
                  <Button className="mt-6 w-full rounded-full bg-[#003E9C] border hover:border-[#003E9C]  hover:bg-white hover:text-[#003E9C] py-6 font-poppins text-white">
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
