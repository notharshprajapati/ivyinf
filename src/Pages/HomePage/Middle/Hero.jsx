import React from "react";
import { Fade } from "react-reveal";

const Hero = () => {
  return (
    <div className="h-screen w-screen py-10 relative flex flex-col">
      <div className="relative z-10 flex flex-col items-center gap-5 mt-auto">
        <Fade bottom delay={0}>
          <span className="text-6xl font-extrabold text-center font-head">
            IVY Drones
          </span>
        </Fade>
        <Fade bottom delay={250}>
          <span className="text-4xl font-semibold text-center">
            World's 1st <span className="text-orange-500">Dual Cam</span> Frame
          </span>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
