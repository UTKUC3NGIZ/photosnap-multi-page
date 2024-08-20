"use client";
import React, { useState } from "react";
import { useScreenSize } from "@/contexts/ScreenSizeContext";
import Logo from "@/../public/assets/shared/desktop/logo.svg";
import Close from "@/../public/assets/shared/mobile/close.svg";
import Menu from "@/../public/assets/shared/mobile/menu.svg";
import { Dialog, DialogPanel } from "@headlessui/react";

const navigation = [
  { name: "STORIES", href: "#" },
  { name: "FEATURES", href: "#" },
  { name: "PRICING", href: "#" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  const screenSize = useScreenSize();

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between px-6 py-7"
      >
        <div className="flex md:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Logo />
          </a>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Menu />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="md:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full h-fit overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between px-6 py-7">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">PHOTOSNAP</span>
              <Logo />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <Close />
            </button>
          </div>
          <div className=" mt-6 flow-root">
            <div className=" divide-gray-500/10">
              <div className="flex flex-col gap-5 p-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-base font-bold text-gray-900 text-center uppercase"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="w-auto h-[1px] bg-pureBlack opacity-25 mx-8"></div>

              <div className="py-6 px-8">
                <a
                  href="#"
                  className="block px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50 text-center bg-black text-white tracking-[2.5px]"
                >
                  GET AN INVITE
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;
