import React from "react";
import { Fade } from "react-reveal";

const StaticImage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" flex flex-col md:flex-row w-full  items-center justify-center overflow-hidden">
        <Fade right>
          <div className="w-full lg:w-1/2 h-full order-1 lg:order-2 flex items-center justify-center mb-4 lg:mb-0">
            <img
              src="./img/rotDrone.png"
              alt="Product"
              style={{
                transform: `scale(1.5)`,
                maxWidth: "100vw",
              }}
              className="w-full lg:w-100 h-auto object-cover transform -z-1 lg:mr-80 md:mr-20 "
            />
          </div>
        </Fade>
        <Fade left>
          <div className="w-full lg:w-1/2 flex items-center justify-center z-10  lg:order-1 ">
            <h2 className="w-full md:w-9/12 lg:w-5/12 lg:text-2xl text-lg text-center lg:text-justify mb-20 lg:-mr-40 md:-mr-20 ">
              <span className="text-orange-700 font-bold">
                DJI FPV stands out in more ways than one.
              </span>
              Sporting front LEDs and aircraft arm lights with
              customizable-color, DJI FPV allows pilots to make their aircraft
              as unique as they are
            </h2>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default StaticImage;
