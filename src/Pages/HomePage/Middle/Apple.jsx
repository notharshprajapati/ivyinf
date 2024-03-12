import React, { useRef, useEffect, useState } from "react";

const Apple = ({
  numFrames,
  width,
  height,
  location,
  format,
  scrollHeight,
  tweek = 0,
  test = false,
  scrollSpeed = 1,
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null); // Added ref for the container
  const [images, setImages] = useState([]);
  const [frameIndex, setFrameIndex] = useState(0);
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);

  // Step 1: Load images
  function getCurrentFrame(index) {
    return `./img/${location}${index.toString().padStart(4, "0")}.${format}`;
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
    if (!containerRef.current || !canvasRef.current) return;

    const containerTop = containerRef.current.getBoundingClientRect().top;
    const containerHeight = containerRef.current.clientHeight;
    const canvasHeight = canvasRef.current.height;
    const scrollPosition = window.scrollY - containerTop - canvasHeight;
    let index = Math.round(
      (scrollPosition / containerHeight) * numFrames * scrollSpeed - tweek
    ); // Modify this line

    setOne(scrollPosition);
    setTwo(index);

    if (isNaN(index) || index <= 0) {
      index = 0;
    }

    if (index >= numFrames) {
      index = numFrames - 1;
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
      context.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      context.drawImage(images[frameIndex], 0, 0);
      requestId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(requestId);
  }, [frameIndex, images]);
  return (
    <div ref={containerRef} style={{ height: height }}>
      <canvas ref={canvasRef} />
      <div style={{ height: scrollHeight }}></div>
      {test && (
        <div className="text-white">
          <div className="fixed top-20 z-50">{one}</div>
          <div className="fixed bottom-0 z-50">{two}</div>
        </div>
      )}
    </div>
  );
};

export default Apple;
