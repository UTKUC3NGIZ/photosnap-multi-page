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
    <footer className="bg-pureBlack py-14 px-8 grid grid-cols-1 justify-items-center md:flex md:flex-row md:justify-between">
      <div className="flex flex-col">
        <Link href={""} className="pb-8 block md:order-1">
          <Logo className="text-pureWhite" />
        </Link>
        <div className="flex flex-row gap-3 pb-12 justify-center md:order-3 md:justify-start">
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
        <ul className="text-center gap-5 flex flex-col pb-32 text-xs font-bold tracking-[2px] uppercase md:flex-row md:order-2 md:pb-[72px]">
          <li>Home</li>
          <li>Stories</li>
          <li>Features</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="flex flex-col items-center md:justify-between md:items-end">
        <ArrowButton />
        <div className="pt-8 md:pt-0 md:pb-12">
          <p className="text-base leading-5 text-pureWhite text-opacity-50">
            &copy; Copyright 2024. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default footer;
