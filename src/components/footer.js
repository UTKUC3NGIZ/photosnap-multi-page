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
    <footer className="bg-pureBlack py-14 px-8 grid grid-cols-1 justify-items-center">
      <Link href={""} className="pb-8">
        <Logo className="text-pureWhite" />
      </Link>
      <div className="flex flex-row gap-3 pb-12">
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
      <ul className="text-center gap-5 flex flex-col pb-32 text-xs font-bold tracking-[2px] uppercase">
        <li>Home</li>
        <li>Stories</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>
      <ArrowButton />
      <div className="pt-8">
        <p className="text-base leading-5 text-pureWhite text-opacity-50">
          &copy; Copyright 2024. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default footer;
