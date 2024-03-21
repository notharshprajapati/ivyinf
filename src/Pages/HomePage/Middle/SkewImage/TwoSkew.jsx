import React from "react";
import { Fade } from "react-reveal";

const TwoSkew = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full mb-20 sticky top-0 bg-black">
      <Fade left>
        <div className="w-full h-full flex items-center justify-center  ">
          <div className=" px-8 md:px-0 w-full md:w-9/12 lg:w-5/12 text-xl md:text-2xl text-justify">
            <h2 className="text-orange-700 font-bold text-2xl md:text-6xl mb-4">
              N Mode
            </h2>
            Ideal for new users, N mode offers immersive flight with traditional
            drone flight controls along with DJI safety features like obstacle
            sensing
          </div>
        </div>
      </Fade>
      <Fade right>
        <div className="w-full h-full  flex items-center justify-center z-10 ">
          <video
            autoPlay
            muted
            loop
            className="w-full h-auto object-cover transform skew-y-[8deg]  lg:mr-40 "
          >
            <source src="./vid/ShivangVid/swamp2.mp4" type="video/mp4" />
          </video>
          2
        </div>
      </Fade>
    </div>
  );
};

export default TwoSkew;
