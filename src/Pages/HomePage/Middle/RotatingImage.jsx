import React, { useState, useEffect, useRef } from "react";

const RotatingImage = ({ isImageLeft, text, imageSrc }) => {
  const [rotation, setRotation] = useState(0);
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        // Get the position of the image on the page
        const imgRect = imgRef.current.getBoundingClientRect();
        const imgCenterY = imgRect.top + imgRect.height / 2;

        // Get the middle of the page
        const middleOfPage = window.innerHeight / 2;

        // Calculate the rotation based on the position of the image on the page
        const maxRotation = 20; // Maximum rotation in degrees
        const distanceToMiddle = imgCenterY - middleOfPage;
        const newRotation = (distanceToMiddle / middleOfPage) * maxRotation;

        // Set the rotation state
        setRotation(newRotation);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Trigger initial rotation on mount
    handleScroll();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex h-screen w-full">
      <div
        className={`w-1/2 h-full ${
          isImageLeft ? "order-1" : "order-2"
        } flex items-center justify-center `}
      >
        <img
          ref={imgRef}
          src={imageSrc}
          alt="Product"
          style={{
            transform: `rotate(${isImageLeft ? rotation : -rotation}deg)`,
          }}
          className={`w-100 h-auto object-cover transform -z-1   ${
            isImageLeft ? "-mr-80" : "mr-80"
          }  `}
        />
      </div>

      <div
        className={`w-1/2 h-full flex items-center justify-center z-10  ${
          !isImageLeft ? "order-1" : "order-2"
        }`}
      >
        <h2
          className={`text-3xl font-bold text-center   ${
            isImageLeft ? "mr-80" : "-mr-80"
          }  `}
        >
          {text}
        </h2>
      </div>
    </div>
  );
};

export default RotatingImage;