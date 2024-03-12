import React from "react";

const StaticImage = () => {
  return (
    <div className="flex  w-full my-40 ">
      <div className="w-1/2 h-full order-2 flex items-center justify-center ">
        <img
          src="./img/rotDrone.png"
          alt="Product"
          style={{
            transform: `scale(1.5)`,
          }}
          className="w-100 h-auto object-cover transform -z-1 mr-80 "
        />
      </div>

      <div className="w-1/2 flex items-center justify-center z-10 order-1 ">
        <h2 className="w-5/12 text-2xl text-justify -mr-80 ">
          <span className="text-orange-700 font-bold">
            DJI FPV stands out in more ways than one.
          </span>
          Sporting front LEDs and aircraft arm lights with customizable-color,
          DJI FPV allows pilots to make their aircraft as unique as they are
        </h2>
      </div>
    </div>
  );
};

export default StaticImage;
