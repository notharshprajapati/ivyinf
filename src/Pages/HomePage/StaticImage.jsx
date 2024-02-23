import React from "react";

const StaticImage = () => {
  return (
    <div className="flex h-screen w-full">
      <div className={`w-1/2 h-full order-2 flex items-center justify-center `}>
        <img
          src="https://dji-official-fe.djicdn.com/dps/fab005b627b32d056534431f6bf6cc05.jpg"
          alt="Product"
          className={`w-100 h-auto object-cover transform -z-1 mr-80    `}
        />
      </div>

      <div
        className={`w-1/2 h-full flex items-center justify-center z-10 order-1 `}
      >
        <h2 className={`w-5/12 text-2xl text-justify -mr-80   `}>
          <span className="text-red-700 font-bold">
            DJI FPV stands out in more ways than one.
          </span>{" "}
          Sporting front LEDs and aircraft arm lights with customizable-color,
          DJI FPV allows pilots to make their aircraft as unique as they are
        </h2>
      </div>
    </div>
  );
};

export default StaticImage;
