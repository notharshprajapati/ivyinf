import React from "react";
import { Fade } from "react-reveal";

const ThreeSkew = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full mb-20 sticky top-0 bg-black">
      <Fade left>
        <div className="w-full h-full  flex items-center justify-center z-10 ">
          <video
            autoPlay
            muted
            loop
            className="w-full h-auto object-cover transform skew-y-[-8deg]  lg:-mr-40 "
          >
            <source src="./vid/ShivangVid/swamp3.mp4" type="video/mp4" />
          </video>
          2
        </div>
      </Fade>
      <Fade right>
        <div className="w-full h-full flex items-center justify-center  ">
          <div className="flex items-center lg:flex-col lg:items-start px-8 md:px-0 w-full md:w-9/12 lg:w-5/12 text-xl md:text-2xl text-justify">
            <div className="mb-4">
              <h2 className="w-full text-6xl font-bold mb-10">M Mode</h2>
              <p className="w-fulltext-2xl text-gray-500">
                Fly in M mode for complete, limitless control and the full FPV
                flight experience. Customize parameters and enjoy flight and
                footage unlike anything else
              </p>
            </div>
            <div className="mx-10 lg:mx-0">
              <p className="text-xl text-gray-500 ">0-100 kph</p>
              <div className="flex full  text-orange-700">
                <h2 className=" text-6xl ">2.0</h2>
                <p className="text-2xl ">s</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ThreeSkew;

//       <source src="./vid/ShivangVid/swamp3.mp4" type="video/mp4" />

//  <div className="w-1/2 h-full flex flex-col  justify-center ml-[400px] order-2">
//    <div className="mb-4">
//      <h2 className="w-5/12 text-6xl font-bold mb-10">M Mode</h2>
//      <p className="w-5/12 text-2xl text-gray-500">
//        Fly in M mode for complete, limitless control and the full FPV flight
//        experience. Customize parameters and enjoy flight and footage unlike
//        anything else
//      </p>
//    </div>
//    <div>
//      <p className="text-xl text-gray-500 ">0-100 kph</p>
//      <div className="flex w-5/12  text-orange-700">
//        <h2 className=" text-6xl ">2.0</h2>
//        <p className="text-2xl ">s</p>
//      </div>
//    </div>
//  </div>;
