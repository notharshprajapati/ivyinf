import React from "react";

const ThreeSkew = () => {
  return (
    <div className="flex h-screen  w-full mb-20">
      <div className="w-1/2 h-full order-1 flex items-center justify-center mt-20  -z-10">
        <video
          autoPlay
          muted
          loop
          className="w-300 h-auto -mr-[400px] -skew-y-[8deg]"
        >
          <source src="./vid/ShivangVid/swamp3.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="w-1/2 h-full flex flex-col  justify-center ml-[400px] order-2">
        <div className="mb-4">
          <h2 className="w-5/12 text-6xl mb-10">M Mode</h2>
          <p className="w-5/12 text-2xl text-gray-500">
            Fly in M mode for complete, limitless control and the full FPV
            flight experience. Customize parameters and enjoy flight and footage
            unlike anything else
          </p>
        </div>
        <div>
          <p className="text-xl text-gray-500 ">0-100 kph</p>
          <div className="flex w-5/12  text-red-700">
            <h2 className=" text-6xl ">2.0</h2>
            <p className="text-2xl ">s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeSkew;
