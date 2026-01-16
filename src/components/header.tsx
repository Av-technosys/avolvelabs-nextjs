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
import { IconArrowBadgeRight, IconChevronDown, IconMenu2 } from "@tabler/icons-react";

const Header = () => {
  const [openMobileServices, setOpenMobileServices] = useState(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-3xl font-bold text-blue-700">
          avolvelabs
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-base font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>

          <Popover>
            <PopoverTrigger className="flex items-center gap-1 cursor-pointer">
              <span>Services</span>
              <IconChevronDown className="h-4 w-4" />
            </PopoverTrigger>

            <PopoverContent className="w-64 p-2">
              <Link
                href="/services/crm-strategy-implementation"
                className="block px-4 py-2 rounded hover:bg-gray-100"
              >
                CRM Strategy & Implementation 
              </Link>
              <Link
                href="/services/managed-services"
                className="block px-4 py-2 rounded hover:bg-gray-100"
              >
                Managed Services
              </Link>
              <Link
                href="/services/value-added-services"
                className="block px-4 py-2 rounded hover:bg-gray-100"
              >
                Value Added Services
              </Link>
            </PopoverContent>
          </Popover>

          <Link href="/casestudy">Case Studies</Link>
        </nav>
        <div className="mr-2">
          Contact Us<br/> 
                 +987123432
        </div>

        <div className="hidden md:block">
          <Link href="/contact">
          <Button className="rounded-full px-7 py-6 text-base">
            Let’s Talk
          </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <IconMenu2 className="text-black"/>
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-[85%] bg-neutral-900 text-white border-none px-0"
            >
              <SheetHeader className="px-6 pt-6 pb-8">
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
                    className="flex w-full items-center justify-between "
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
                      <Link className="flex gap-2 items-center" href="/services/crm-strategy-implementation">
                      <IconArrowBadgeRight/>
                        CRM Strategy & Implementation
                      </Link>
                      <Link className="flex gap-2 items-center" href="/services/managed-services">
                       <IconArrowBadgeRight/>
                        Managed Services
                      </Link>
                      <Link className="flex gap-2 items-center" href="/services/value-added-services">
                       <IconArrowBadgeRight/>
                        Value Added Services
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/casestudy"
                  className="border-b border-white/10 pb-4"
                >
                  Case Studies
                </Link>
              <Link href="/contact">
                <Button className="mt-6 rounded-full py-6 text-base">
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
