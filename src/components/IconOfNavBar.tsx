"use client";
import Image from "next/image";
import { useState } from "react";

const IconOfNavBar = () => {
  const [iconOfNavBar, setIconOfNavBar] = useState("/Icon1.svg");

  const handleMouseEnter = () => {
    setIconOfNavBar("/Icon2.svg");
  };

  const handleMouseLeave = () => {
    setIconOfNavBar("/Icon1.svg");
  };

  return (
    <button
      className="flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={iconOfNavBar}
        width={24}
        height={24}
        alt="Icon the portfolio"
      />
      <h1 className="ml-2">Joaquin</h1>
    </button>
  );
};

export default IconOfNavBar;
