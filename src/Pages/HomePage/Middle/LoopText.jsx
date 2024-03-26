import React from "react";
import { Fade } from "react-reveal";

const LoopText = ({ title, text, videoSrc }) => {
  return (
    <div className="flex flex-col h-screen items-center justify-center relative z-10  ">
      <div className="text-center mx-auto ">
        <Fade top delay={0}>
          <h1 className="w-full md:w-5/12 text-4xl md:text-5xl font-bold mb-10 mx-auto">
            {title}
          </h1>
        </Fade>
        <Fade top delay={200}>
          <div className="w-full text-xl md:w-2/3 md:text-2xl  mx-auto">
            {text}
          </div>
        </Fade>
      </div>
      <Fade bottom delay={200}>
        <div className="w-full mt-10 md:mt-0 md:w-2/3 flex justify-center ">
          <video autoPlay muted loop>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </Fade>
    </div>
  );
};

export default LoopText;
