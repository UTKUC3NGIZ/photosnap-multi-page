"use client";
import React from "react";
import MyIcon from "@/../public/assets/shared/desktop/arrow.svg";

function arrowButton({ color }) {
  const buttonStyle = {
    white: "text-pureWhite",
    black: "text-pureBlack",
  };
  return (
    <div>
      <button
        className={`uppercase font-bold text-xs tracking-[2px] hover:underline flex flex-row items-center gap-4
             ${buttonStyle[color]}`}
      >
        Button 1
        <MyIcon className={`${buttonStyle[color]}`} />
      </button>
      <div></div>
    </div>
  );
}

export default arrowButton;
