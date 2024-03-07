import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-screen w-screen py-10 relative flex flex-col">
      <div className="relative z-10 flex flex-col items-center gap-5 mt-auto">
        <span className="text-6xl font-extrabold text-center">IVY Drones</span>
        <span className="text-4xl font-semibold text-center">
          World's 1st <span className="text-orange-500">Dual Cam</span> Frame
        </span>
      </div>
    </div>
  );
};

export default Hero;
