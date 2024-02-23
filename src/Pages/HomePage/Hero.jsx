import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-screen w-screen py-20 relative flex flex-col">
      <div className="relative z-10 flex flex-col items-center gap-10 mt-auto">
        <span className="text-6xl font-extrabold text-center">
          IVY INFINITY
        </span>
        <span className="text-4xl font-semibold text-center">
          Redefine Flying
        </span>
        <button className="py-2 px-4 flex flex-row items-center gap-2 border-2 border-white rounded-full">
          <span className="font-bold text-center">Watch Video</span>
          <FaRegArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
