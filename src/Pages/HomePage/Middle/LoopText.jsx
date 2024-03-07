import React from "react";

const LoopText = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center relative z-10  mt-20">
      <div className="text-center mx-auto ">
        <h1 className="w-5/12 text-5xl font-bold mb-10 mx-auto">
          FPV Has Never Looked This Good
        </h1>
        <div className="w-2/3 text-xl font-semibold mx-auto">
          <span className="text-red-700">Sleek and aerodynamic,</span>
          <span>
            the DJI FPV aircraft delivers powerful propulsion, battery life, and
            wind resistance, making this system as capable as it is visually
            stunning.
          </span>
        </div>
      </div>
      <div className="mt-99">
        <video autoPlay muted loop>
          <source src="./vid/air.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default LoopText;
