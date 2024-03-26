import React from "react";
import IconGrid from "./Middle/IconGrid";
import LoopText from "./Middle/LoopText";
import StaticImage from "./Middle/StaticImage";
import Zoomout from "./Zoomout";
import Replacement from "./Replacement";
import SkewImage from "./Middle/SkewImage";
import Sequence from "./Middle/Sequence";
import Apple from "./Middle/Apple";
import { Fade } from "react-reveal";

const index = () => {
  return (
    <div>
      <Sequence />
      <div className="relative">
        <div className="bg-black relative z-10">
          <IconGrid />
          <div className="sticky top-0 bg-black">
            <LoopText
              title="FPV Has Never Looked This Good"
              text="Sleek and aerodynamic, the DJI FPV aircraft delivers powerful propulsion, battery life, and wind resistance, making this system as capable as it is visually stunning."
              videoSrc="./vid/rotateVideo.mp4"
            />
          </div>
          <div className="h-40 "></div>
          <div className="relative bg-black">
            <StaticImage />
          </div>
          <div className="sticky top-0 bg-black">
            <Replacement />
          </div>
          <div className="h-[80vh] lg:h-40 "></div>
          <div className="sticky top-0 bg-black">
            <Zoomout />
          </div>
          <div className="h-40 "></div>
          <div className="relative bg-black">
            <SkewImage />
          </div>
          <div className="sticky top-0 bg-black">
            <LoopText
              title="See it how it is build"
              text="Sleek and aerodynamic, the DJI FPV aircraft delivers powerful propulsion, battery life, and wind resistance, making this system as capable as it is visually stunning."
              videoSrc="./vid/inParts.mp4"
            />
          </div>
          <div className="h-40 "></div>
          {/* final */}
          <div className="relative h-40 bg-black"></div>
          <div className="relative bg-black">
            <div className="w-screen h-full flex flex-col items-center justify-center">
              <Fade bottom>
                <div className=" w-full lg:w-5/12  text-3xl lg:text-5xl text-center font-bold mx-auto mb-10">
                  <span className="w-full text-orange-700 font-bold">
                    Next-Level Immersion.
                  </span>
                  Unparalleled Control.
                </div>
              </Fade>
              <Fade bottom delay={200}>
                <p className="w-full text-md md:w-1/2 text-center md:text-xl mx-auto">
                  Feel the thrill of immersive flight provided by the DJI
                  Goggles V2 and DJI FPV's super-wide 150° FOV. HD video
                  transmission at up to 120fps gives you an ultra-smooth,
                  real-time view of your flight. DJI FPV now supports DJI
                  Goggles Integra and DJI Goggles 2.
                </p>
              </Fade>
            </div>
            <div className="relative h-40 bg-black"></div>
            <div className="relative z-0 h-[600vh] w-screen ">
              <div className="sticky top-0">
                <div className="absolute inset-50 z-20 flex items-center justify-center text-4xl ">
                  <Apple
                    className="z-10"
                    numFrames={132}
                    width={1920}
                    scrollHeight={0}
                    height={1080}
                    location={"special/special"}
                    format={"png"}
                    tweek={600}
                    scrollSpeed={0.25}
                  />
                </div>

                <div className="absolute inset-0 z-10 ">
                  <div className="h-screen w-auto relative flex items-center justify-center">
                    <video
                      autoPlay
                      muted
                      loop
                      className=" w-full h-full object-cover"
                    >
                      <source src="./vid/gameVideo.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="h-screen"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-screen w-screen">END</div>
        </div>
      </div>
    </div>
  );
};

export default index;
