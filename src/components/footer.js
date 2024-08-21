import React from "react";
import Logo from "@/../public/assets/shared/desktop/logo.svg";
import Facebook from "@/../public/assets/shared/desktop/facebook.svg";
import Youtube from "@/../public/assets/shared/desktop/youtube.svg";
import Twitter from "@/../public/assets/shared/desktop/twitter.svg";
import Pinterest from "@/../public/assets/shared/desktop/pinterest.svg";
import Instagram from "@/../public/assets/shared/desktop/instagram.svg";
import Link from "next/link";
import ArrowButton from "@/components/buttons/arrowButton";

function footer() {
  return (
    <footer className="bg-pureBlack py-14 px-8 grid grid-cols-1 md:grid-cols-2 justify-items-center">
      <Link href={""} className="pb-8 md:order-1 md:col-span-1 md:w-full">
        <Logo className="text-pureWhite" />
      </Link>
      <div className="flex flex-row gap-3 pb-12 md:col-span-1 md:order-4 md:w-full">
        <Link href={""}>
          <Facebook className="text-pureWhite" />
        </Link>
        <Link href={""}>
          <Youtube className="text-pureWhite" />
        </Link>
        <Link href={""}>
          <Twitter className="text-pureWhite" />
        </Link>
        <Link href={""}>
          <Pinterest className="text-pureWhite" />
        </Link>
        <Link href={""}>
          <Instagram className="text-pureWhite" />
        </Link>
      </div>
      <ul className="text-center gap-5 flex flex-col pb-32 text-xs font-bold tracking-[2px] uppercase md:order-3 md:col-span-2 md:flex-row md:justify-start md:w-full md:pb-[72px]">
        <li>Home</li>
        <li>Stories</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>
      <div className="md:order-2 md:col-span-1 pb-8 md:w-full md:flex justify-end">
        <ArrowButton color="white" />
      </div>
      <div className="md:order-5 md:col-span-1 md:w-full md:flex md:justify-end">
        <p className="text-base leading-5 text-pureWhite text-opacity-50">
          &copy; Copyright 2024. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default footer;
