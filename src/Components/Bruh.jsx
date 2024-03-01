import React from "react";
import Sus from "../Pages/HomePage/Middle/Sus";

const Bruh = () => {
  return (
    <div className="bg-orange-700 text-6xl text-red-500 font-bold">
      <div className=" z-10 sticky top-0 w-full h-screen ">Head 1</div>
      <div className="relative z-20 w-full h-screen text-6xl ">Body 1</div>
      <div className=" z-10 sticky top-0 w-full h-screen ">
        {/* <Sus
          width={1920}
          height={1080}
          numFrames={37}
          location={"LinesVideo/LV"}
          scrollHeight={2160}
          format={"jpg"}
        /> */}
        <img src="/public/img/LinesVideo/LV0037.jpg" alt="" />
      </div>
      <div className="relative z-20 w-full h-screen text-6xl ">Body 2</div>
      <div className=" z-10 sticky top-0 w-full h-screen ">Head 3</div>
      <div className="relative z-20 w-full h-screen text-6xl ">Body 3</div>
    </div>
  );
};

export default Bruh;
