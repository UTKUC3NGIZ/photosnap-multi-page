"use client";
import React from "react";
import { useScreenSize } from "@/contexts/ScreenSizeContext";
import Logo from "@/../public/assets/shared/desktop/logo.svg";
import Close from "@/../public/assets/shared/mobile/close.svg";
import Menu from "@/../public/assets/shared/mobile/menu.svg";
function Header() {
  const screenSize = useScreenSize();

  return (
    <header className="bg-white px-6 py-7 flex justify-between items-center">
      <Logo />
      <Menu />
    </header>
  );
}

export default Header;
