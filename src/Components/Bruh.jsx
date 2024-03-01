import React from "react";

const Bruh = () => {
  return (
    <div className="bg-orange-700 text-6xl text-red-500 font-bold">
      <div className="z-10 sticky top-0 w-full h-screen ">
        <img
          className="h-screen w-full z-10"
          src="./img/Hero/Image0054.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-screen z-20 flex items-center justify-center">
          <div className="text-white text-6xl">Body 1</div>
        </div>
      </div>
      <div className="z-10 sticky top-0 w-full h-screen bg-orange-700">
        HeadHeadHeadHead 2
      </div>
      <div className="relative z-20 w-full h-screen text-6xl">Body 2</div>
      <div className="z-10 sticky top-0 w-full h-screen">
        HeadHeadHeadHead 3
      </div>
      <div className="relative z-20 w-full h-screen text-6xl">Body 3</div>
    </div>
  );
};

export default Bruh;
