import React, { useEffect, useState, useRef } from "react";

const SeqVid = ({ numFrames, location }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const frameDuration = 1000 / 24;
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateFrame = () => {
      setCurrentFrame((prevFrame) => {
        const nextFrame = prevFrame + 1;
        return nextFrame < numFrames ? nextFrame : prevFrame;
      });
    };

    const intervalId = setInterval(updateFrame, frameDuration);

    return () => clearInterval(intervalId);
  }, [numFrames, frameDuration]);

  const handleScroll = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial visibility

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef}>
      {isVisible && (
        <img
          src={`./img/${location}${currentFrame
            .toString()
            .padStart(4, "0")}.jpg`}
        />
      )}
    </div>
  );
};

export default SeqVid;

{
  /* <SeqVid numFrames={108} location={"Hero/Image"} />
      <SeqVid numFrames={61} location={"CamZoom/CZ"} /> */
}
