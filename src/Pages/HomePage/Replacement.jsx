import React from "react";
import { Fade } from "react-reveal";
import AppleOrignal from "./Middle/AppleOrignal";

const Replacement = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <Fade bottom>
          <h1 className="w-full lg:w-5/12 text-3xl lg:text-5xl text-center font-bold mx-auto mb-10 mt-20">
            Easily{" "}
            <span className="text-orange-700 font-bold">Replaceable </span>
            Parts
          </h1>
        </Fade>
        <Fade bottom delay={200}>
          <p className="w-full lg:w-1/2 text-sm lg:text-xl text-center  mx-auto">
            <span className="text-gray-500 ">
              The gimbal camera, landing gear, and top shell of the DJI FPV
              aircraft are all modular and easily replaceable, making repairs
              more convenient .
            </span>
            DJI Care Refresh is also available, offering coverage for a wide
            range of damage and giving you greater peace of mind as you fly.
          </p>
        </Fade>
      </div>
      <div className="bg-black w-screen ">
        <div className=" flex justify-center ">
          <AppleOrignal
            numFrames={24}
            size={720}
            scrollHeight={1920}
            location={"build/build"}
            format={"jpg"}
            tweek={250}
            scrollSpeed={0.75}
          />
        </div>
      </div>
    </div>
  );
};

export default Replacement;
