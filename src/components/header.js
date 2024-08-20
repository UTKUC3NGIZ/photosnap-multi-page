import React from "react";
import Image from "next/image";
function header() {
  return (
    <header className="bg-pureWhite">
      <Image
        src="/profile.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </header>
  );
}

export default header;
