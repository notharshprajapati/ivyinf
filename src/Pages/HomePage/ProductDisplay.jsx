import React, { useEffect, useState } from "react";

const ProductDisplay = ({ isImageLeft }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScrollTop =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const rotationAngle = scrollFraction * 30; // Adjust the multiplier for the desired rotation range

      setRotation(rotationAngle);
      console.log(rotation);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imagePlacementClass = isImageLeft ? "order-1" : "order-2";
  const textPlacementClass = !isImageLeft ? "order-1" : "order-2";

  return (
    <div className="flex h-screen w-full">
      {/* Left Part (Image) or Right Part based on isImageLeft prop */}
      <div
        className={`w-1/2 h-full ${imagePlacementClass} flex items-center justify-center`}
      >
        <img
          src="https://placekitten.com/800/600" // Replace with your actual image source
          alt="Product"
          className={`w-1/2 h-auto object-cover transform rotate-[${rotation}deg]`} // Dynamic rotation based on scroll
        />
      </div>

      {/* Right Part (Product Name) or Left Part based on isImageLeft prop */}
      <div
        className={`w-1/2 h-full flex items-center justify-center bg-gray-200 ${textPlacementClass}`}
      >
        <h2 className="text-3xl font-bold text-center">Product Name Here</h2>
      </div>
    </div>
  );
};

export default ProductDisplay;
