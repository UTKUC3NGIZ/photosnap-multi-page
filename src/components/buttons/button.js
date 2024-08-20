import React from "react";

function button({ color }) {
  const buttonStyle = {
    white: "text-pureBlack bg-pureWhite",
    black: "text-pureWhite bg-pureBlack",
  };
  return (
    <div>
      <button
        className={`uppercase font-bold text-xs px-8 py-3 tracking-[2px] hover:bg-lightGrey hover:text-pureBlack ${buttonStyle[color]}`}
      >
        Button 1
      </button>
    </div>
  );
}

export default button;
