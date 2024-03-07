import React, { useRef, useEffect, useState } from "react";

const Apple = ({ scrollHeight, numFrames, width, height, location }) => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [frameIndex, setFrameIndex] = useState(0);
  const [log, setLog] = useState(0);

  // Step 1: Load images
  function getCurrentFrame(index) {
    return `./img/${location}${index.toString().padStart(4, "0")}.jpg`;
  }
  function preloadImages() {
    for (let i = 1; i <= numFrames; i++) {
      const img = new Image();
      const imgSrc = getCurrentFrame(i);
      img.src = imgSrc;
      setImages((prevImages) => [...prevImages, img]);
    }
  }

  // Step 2: Handle scroll events
  const handleScroll = () => {
    const scrollFraction = window.scrollY / (scrollHeight - window.innerHeight);
    const index = Math.min(
      numFrames - 1,
      Math.ceil(scrollFraction * numFrames)
    );
    setLog(index);
    if (index <= 0 || index > numFrames) {
      return;
    }

    setFrameIndex(index);
  };

  // Step 3: Set up canvas
  const renderCanvas = () => {
    const context = canvasRef.current.getContext("2d");
    context.canvas.width = width;
    context.canvas.height = height;
  };

  // Step 4: Render images to canvas
  useEffect(() => {
    preloadImages();
    renderCanvas();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || images.length < 1) return;

    const context = canvasRef.current.getContext("2d");
    let requestId;

    const render = () => {
      context.drawImage(images[frameIndex], 0, 0);
      requestId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(requestId);
  }, [frameIndex, images]);
  return (
    <div style={{ height: scrollHeight }}>
      <canvas ref={canvasRef} />
      <div className="z-10 text-white text-4xl font-bold relative">
        {/* <div className="h-screen">Bottom</div> */}
        <div className="fixed top-0">{log}</div>
      </div>
    </div>
  );
};

export default Apple;
