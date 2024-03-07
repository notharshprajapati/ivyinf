import React from "react";
import CenterFadeText from "./Middle/CenterFadeText";
import IconGrid from "./Middle/IconGrid";
import LoopText from "./Middle/LoopText";
import StaticImage from "./Middle/StaticImage";
import HeroAnimation from "./Middle/HeroAnimation";
import Zoomout from "./Zoomout";
import Replacement from "./Replacement";
import SkewImage from "./Middle/SkewImage";
import Sequence from "./Middle/Sequence";
import { ScrollContainer } from "react-scroll-motion";

const index = () => {
  return (
    <div>
      <Sequence />
      <div className="relative">
        <div className="bg-black relative z-10">
          <IconGrid />
          <LoopText />
          <StaticImage />
          <div className="w-screen h-screen flex flex-col items-center justify-center">
            <h1 className="w-5/12 text-5xl text-center font-bold mx-auto mb-10">
              <span className="text-red-700 font-bold">
                Next-Level Immersion.
              </span>
              Unparalleled Control.
            </h1>
            <p className="w-1/2 text-center text-xl mx-auto">
              Feel the thrill of immersive flight provided by the DJI Goggles V2
              and DJI FPV's super-wide 150° FOV. HD video transmission at up to
              120fps gives you an ultra-smooth, real-time view of your flight.
              DJI FPV now supports DJI Goggles Integra and DJI Goggles 2.
            </p>
          </div>
          <HeroAnimation />
          <div className="bg-black-200 p-10 h-screen w-screen z-10"> </div>
          <Zoomout />
          <SkewImage />
          <Replacement />
          <div className="h-screen w-screen bg-red-100 z-20"> sus</div>
        </div>
      </div>
    </div>
  );
};

export default index;
