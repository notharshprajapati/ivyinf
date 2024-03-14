import React from "react";
import { Fade } from "react-reveal";

const TwoSkew = () => {
  return (
    <div className="flex h-screen w-full mb-20 sticky top-0 bg-black">
      <Fade right>
        <div className="w-1/2 h-full order-2 flex items-center justify-center  -z-10">
          <video
            autoPlay
            muted
            loop
            className="w-300 h-auto object-cover transform  mr-[200px] skew-y-[8deg]"
          >
            <source src="./vid/ShivangVid/swamp2.mp4" type="video/mp4" />
          </video>
        </div>
      </Fade>
      <Fade left>
        <div className="w-1/2 h-full flex flex-col items-center justify-center order-1">
          <h2 className="w-5/12 text-6xl font-bold mb-10">N Mode</h2>
          <p className="w-5/12 text-2xl text-gray-500">
            Ideal for new users, N mode offers immersive flight with traditional
            drone flight controls along with DJI safety features like obstacle
            sensing
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default TwoSkew;
