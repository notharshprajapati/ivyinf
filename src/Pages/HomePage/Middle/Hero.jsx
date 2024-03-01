import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-screen w-screen py-10 relative flex flex-col">
      <div className="relative z-10 flex flex-col items-center gap-5 mt-auto">
        <span className="text-6xl font-extrabold text-center">
          IVY INFINITY
        </span>
        <span className="text-4xl font-semibold text-center">
          Redefine Flying
        </span>
      </div>
    </div>
  );
};

export default Hero;
