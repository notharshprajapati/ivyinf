import React from "react";
import { Fade } from "react-reveal";

const OneSkew = () => {
  return (
    <div className="flex h-screen w-full mb-20 sticky top-0 bg-black">
      <Fade left>
        <div className="w-1/2 h-full order-1 flex items-center justify-center mt-[100px] -z-10">
          <video
            autoPlay
            muted
            loop
            className="w-300 h-auto object-cover transform  -mr-[300px] -skew-y-[8deg]"
          >
            <source src="./vid/ShivangVid/swamp1.mp4" type="video/mp4" />
          </video>
          <img
            src="https://store-guides2.djicdn.com/guides/wp-content/uploads/2017/10/Spark-with-remote-controller-feature-picture-696x340.jpg"
            className="w-[32rem] h-auto object-cover  mt-[400px] -mr-[400px] -skew-y-[8deg] "
          />
        </div>
      </Fade>
      <Fade right>
        <div
          className={`w-1/2 h-full flex items-center justify-center  order-2 `}
        >
          <h2 className={`w-5/12 text-2xl text-justify mr-80   `}>
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
