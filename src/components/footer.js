import React from "react";
import Logo from "@/../public/assets/shared/desktop/logo.svg";
import Link from "next/link";
import ArrowButton from "@/components/buttons/arrowButton";

function footer() {
  return (
    <footer className="bg-pureBlack">
      <Logo className="text-pureWhite " />
      <div>
        <Link href={""}></Link>
        <Link href={""}></Link>
        <Link href={""}></Link>
        <Link href={""}></Link>
        <Link href={""}></Link>
      </div>
      <ul>
        <li>Home</li>
        <li>Stories</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>
      <ArrowButton />
      <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
        <p className="text-xs leading-5 text-gray-400">
          &copy; Copyright 2024. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default footer;
