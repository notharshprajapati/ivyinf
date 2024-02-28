import React, { useEffect, useRef, useState } from "react";

const Replacement = () => {
  const [number, setNumber] = useState(0);
  const [src, setSrc] = useState("");
  const noRef = useRef(null);
  const currentFrame = (index) =>
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
      .toString()
      .padStart(4, "0")}.jpg`;

  const preloadImages = () => {
    for (let i = 1; i < 148; i++) {
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
        if (num > 148) {
          setSrc(
            `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(147)
              .toString()
              .padStart(4, "0")}.jpg`
          );
        }
        if (num < 0) {
          setSrc(
            `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(0)
              .toString()
              .padStart(4, "0")}.jpg`
          );
        }
        if (num > 0 && num < 148) {
          console.log(num);
          setSrc(
            `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${num
              .toString()
              .padStart(4, "0")}.jpg`
          );
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
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <h1 className="w-5/12 text-5xl text-center font-bold mx-auto mb-10 mt-20">
          Easily <span className="text-red-700 font-bold">Replaceable </span>
          Parts
        </h1>
        <p className="w-1/2 text-center text-xl mx-auto">
          <span className="text-gray-500 ">
            The gimbal camera, landing gear, and top shell of the DJI FPV
            aircraft are all modular and easily replaceable, making repairs more
            convenient .
          </span>
          DJI Care Refresh is also available, offering coverage for a wide range
          of damage and giving you greater peace of mind as you fly.
        </p>
      </div>
      <div className="bg-black w-screen mt-20  ">
        <div className="flex items-center justify-center  ">
          {number}
          <img ref={noRef} src={src} className="w-auto h-[40rem]" />
        </div>
      </div>
    </div>
  );
};

export default Replacement;
