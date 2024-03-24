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

        const maxScale = 2; // Maximum scale
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
    <div className="h-auto md:mt-40 relative z-0 flex items-center justify-center overflow-hidden">
      <img
        ref={noRef}
        style={{ transform: `scale(${scale})`, maxWidth: "100vw" }}
        className="-z-10"
        src="./img/nature.png"
        alt=""
      />
      <div className="absolute">
        <Fade bottom>
          <h1 className="text-xl md:text-4xl font-bold w-full md:w-3/4  text-center mx-auto ">
            Whether you are a seasoned FPV pilot or a complete beginner, DJI FPV
            offers three intuitive flight modes that let anyone fly confidently
            from day one.
          </h1>
        </Fade>
      </div>
    </div>
  );
};

export default Zoomout;
