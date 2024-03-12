import React, { useEffect, useState } from "react";

const HeroAnimation = () => {
  const [frameIndex, setFrameIndex] = useState(1);

  const currentFrame = (index) =>
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
      .toString()
      .padStart(4, "0")}.jpg`;

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScrollTop =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const nextFrameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      setFrameIndex(nextFrameIndex + 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(frameIndex);
    return () => {};
  }, [frameIndex]);

  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <canvas
        id="hero-lightpass"
        className="max-w-full max-h-full "
        width="1158"
        height="770"
      />
      <img
        src={currentFrame(frameIndex)}
        alt="Hero Lightpass"
        className="absolute inset-0 object-cover w-full h-full opacity-0"
        onLoad={() => {
          const canvas = document.getElementById("hero-lightpass");
          const context = canvas.getContext("2d");
          const img = new Image();
          img.src = currentFrame(frameIndex);
          img.onload = function () {
            context.drawImage(img, 0, 0);
            img.style.opacity = "1";
          };
        }}
      />
    </div>
  );
};

const frameCount = 148;

export default HeroAnimation;
