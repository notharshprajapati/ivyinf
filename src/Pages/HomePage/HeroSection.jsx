import React from "react";

const HeroSection = () => {
  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("https://placekitten.com/1920/1080")' }}
    >
      <div className="text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">IVY Infinity</h1>
        <p className="text-lg md:text-xl mt-4">Change Perspective</p>
      </div>
    </div>
  );
};

export default HeroSection;
