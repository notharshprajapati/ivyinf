import React from "react";
import Hero from "../Middle/Hero";
import Sus from "../Middle/Sus";

const Start = () => {
  return (
    <div>
      <video
        className="sticky top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
      >
        <source
          src="https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/1d5f5409-1b3f-421d-be8c-bfc982196d24.webm"
          type="video/webm"
        />
      </video>
      <div className="fixed top-0">
        <Hero className="relative z-10" />
      </div>
    </div>
  );
};

export default Start;
