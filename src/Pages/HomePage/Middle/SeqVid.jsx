import React, { useEffect, useState, useRef } from "react";

const SeqVid = ({ numFrames, location, format = "jpg" }) => {
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
    <div className="w-full h-full" ref={containerRef}>
      {isVisible && (
        <img
          className="w-full h-full object-cover "
          src={`./img/${location}${currentFrame
            .toString()
            .padStart(4, "0")}.${format}`}
        />
      )}
    </div>
  );
};

export default SeqVid;
{
}
