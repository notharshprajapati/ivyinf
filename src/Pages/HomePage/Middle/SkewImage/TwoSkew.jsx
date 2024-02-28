import React from "react";

const TwoSkew = () => {
  return (
    <div className="flex h-screen w-full mb-20">
      <div className="w-1/2 h-full order-2 flex items-center justify-center  -z-10">
        <video
          autoPlay
          muted
          loop
          className="w-300 h-auto object-cover transform  mr-[200px] skew-y-[8deg]"
        >
          <source
            src="https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/3db3793d-f044-43bd-bb8a-f7f17428a256.webm"
            type="video/webm"
          />
        </video>
      </div>

      <div className="w-1/2 h-full flex flex-col items-center justify-center order-1">
        <h2 className="w-5/12 text-6xl mb-10">N Mode</h2>
        <p className="w-5/12 text-2xl text-gray-500">
          Ideal for new users, N mode offers immersive flight with traditional
          drone flight controls along with DJI safety features like obstacle
          sensing
        </p>
      </div>
    </div>
  );
};

export default TwoSkew;
