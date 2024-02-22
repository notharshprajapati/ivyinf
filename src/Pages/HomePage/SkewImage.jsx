import React from "react";

const SkewImage = () => {
  return (
    <div className="flex h-[600px] w-full bg-black overflow-hidden">
      <div className="w-1/2 h-full flex items-center justify-center transition-transform transform translate-x-40">
        <img
          src="https://placekitten.com/800/600"
          alt="Product"
          className="w-1/2 h-auto object-cover transform -skew-y-12 transition-transform "
        />
      </div>

      <div className="w-1/2 h-full flex items-center justify-center bg-black text-white transition-transform transform -translate-x-40">
        <h2 className="text-3xl font-bold text-center">Product Name Here</h2>
      </div>
    </div>
  );
};

export default SkewImage;
