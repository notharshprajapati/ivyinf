import React from "react";

const LoopText = ({ title, text, videoSrc }) => {
  return (
    <div className="flex flex-col h-screen items-center justify-center relative z-10  mt-20">
      <div className="text-center mx-auto ">
        <h1 className="w-5/12 text-5xl font-bold mb-10 mx-auto">{title}</h1>
        <div className="w-2/3 text-xl font-semibold mx-auto">{text}</div>
      </div>
      <div className="w-2/3">
        <video autoPlay muted loop>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default LoopText;
