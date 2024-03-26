import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-reveal";

const Zoomout = () => {
  const [scale, setScale] = useState(1);
  const noRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (noRef.current) {
        const noRect = noRef.current.getBoundingClientRect();
        const noCenterY = noRect.top + noRect.height / 2;
        const middleOfPage = window.innerHeight / 2;

        const maxScale = 3; // Maximum scale
        const minScale = 1; // Minimum scale

        const distanceToMiddle = noCenterY - middleOfPage;
        const newScale = Math.max(
          minScale,
          Math.min(maxScale, 1 + distanceToMiddle / middleOfPage)
        );

        setScale(newScale.toFixed(2));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen md:mt-40 relative z-0 flex items-end justify-end overflow-hidden">
      <div className=" h-full flex items-end justify-end ">
        <img
          ref={noRef}
          style={{ transform: `scale(${scale})`, maxWidth: "100vw" }}
          className="-z-10 w-screen h-full object-cover"
          src="./img/nature.jpg"
          alt=""
        />
      </div>
      <div className="absolute h-full  flex-col-reverse items-center justify-center">
        <div className="h-3/4"></div>
        <div className="h-1/4 w-full flex items-center justify-center">
          <Fade bottom>
            <h1 className="text-md md:text-4xl font-bold w-full md:w-3/4  text-center text-orange-900 ">
              Whether you are a seasoned FPV pilot or a complete beginner, DJI
              FPV offers three intuitive flight modes that let anyone fly
              confidently from day one.
            </h1>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Zoomout;
