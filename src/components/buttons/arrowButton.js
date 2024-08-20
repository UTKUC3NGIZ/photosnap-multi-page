"use client";

import React from "react";
import MyIcon from "@/../public/assets/shared/desktop/arrow.svg";

function ArrowButton({ color }) {
  const buttonStyle = {
    white: "text-pureWhite",
    black: "text-pureBlack",
  };

  return (
    <div>
      <button
        className={`uppercase font-bold text-xs tracking-[2px] hover:underline
             ${buttonStyle[color]}`}
      >
        Button 1
      </button>
      <img src={MyIcon} alt="Arrow Icon" />
    </div>
  );
}

export default ArrowButton;
