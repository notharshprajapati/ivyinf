import React from "react";

const Replacement = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <h1 className="w-5/12 text-5xl text-center font-bold mx-auto mb-10 mt-20">
          Easily <span className="text-red-700 font-bold">Replaceable </span>
          Parts
        </h1>
        <p className="w-1/2 text-center text-xl mx-auto">
          <span className="text-gray-500 ">
            The gimbal camera, landing gear, and top shell of the DJI FPV
            aircraft are all modular and easily replaceable, making repairs more
            convenient .
          </span>
          DJI Care Refresh is also available, offering coverage for a wide range
          of damage and giving you greater peace of mind as you fly.
        </p>
      </div>
      <div className="bg-black w-screen mt-20  ">
        {/* <div className="flex items-center justify-center  ">
          {number}
          <img ref={noRef} src={src} className="w-auto h-[40rem]" />
        </div> */}
      </div>
    </div>
  );
};

export default Replacement;
