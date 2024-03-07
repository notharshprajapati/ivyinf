import React, { useEffect, useRef, useState } from "react";

const HeroAnimation = () => {
  const frames = 24;
  const [number, setNumber] = useState(0);
  const [src, setSrc] = useState("");
  const noRef = useRef(null);

  const currentFrame = (index) =>
    `./img/build/build${index.toString().padStart(4, "0")}.jpg`;

  const preloadImages = () => {
    for (let i = 1; i < frames; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (noRef.current) {
        // Get the position of the div on the page
        const noRect = noRef.current.getBoundingClientRect();
        const noCenterY = noRect.top + noRect.height / 2;

        // Get the middle of the page
        const middleOfPage = window.innerHeight / 2;

        // Calculate the rotation based on the position of the div on the page
        const maxRotation = 100; // Maximum rotation in degrees
        const distanceToMiddle = noCenterY - middleOfPage;
        const newRotation = (distanceToMiddle / middleOfPage) * maxRotation;

        // Set the rotation state
        const num = Math.floor(newRotation) + 100;
        setNumber(num);
        if (num > 0 && num < frames) {
          console.log(num);
          setSrc(`./img/build/build${num.toString().padStart(4, "0")}.jpg`);
        }
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
    <div ref={noRef} className=" w-full z-20">
      <div className="flex items-center justify-center h-screen sticky top-10 z-10  ">
        <img src={src} className="w-3/8 h-auto " />
      </div>
      <div className=" h-screen"></div>
    </div>
  );
};

export default HeroAnimation;
