import React from "react";
import { Fade } from "react-reveal";

const OneSkew = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full mb-20 sticky top-0 bg-black">
      <Fade left>
        <div className="w-full h-full  flex items-center justify-center z-10 ">
          <video
            autoPlay
            muted
            loop
            className="w-full h-auto object-cover transform   lg:-mr-40 "
          >
            <source src="./vid/ShivangVid/swamp1.mp4" type="video/mp4" />
          </video>
        </div>
      </Fade>
      <Fade right>
        <div className="w-full h-full flex items-center justify-center  ">
          <h2 className=" px-8 md:px-0 w-full md:w-9/12 lg:w-5/12 text-xl md:text-2xl text-justify">
            <span className="text-orange-700 font-bold">
              DJI FPV stands out in more ways than one.
            </span>
            Sporting front LEDs and aircraft arm lights with customizable-color,
            DJI FPV allows pilots to make their aircraft as unique as they are
          </h2>
        </div>
      </Fade>
    </div>
  );
};

export default OneSkew;
