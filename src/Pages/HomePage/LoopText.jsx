import React from "react";

const LoopText = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center relative z-10  my-20">
      <div className="text-center mx-auto mb-20">
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
      <div>
        <video
          className="w-2/3 h-auto object-cover mx-auto"
          autoPlay
          muted
          loop
        >
          <source
            src="https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/0778f1c1-9f6e-4a56-a85c-81b9f8fac563.mp4"
            type="video/webm"
          />
        </video>
      </div>
    </div>
  );
};

export default LoopText;
