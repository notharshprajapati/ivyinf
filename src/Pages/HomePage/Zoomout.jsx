import React, { useEffect, useRef, useState } from "react";

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
    <div className="h-auto bg-red-400 relative z-0">
      <h1 className="fixed bottom-0 z-10">{scale}</h1>
      <img
        ref={noRef}
        style={{ transform: `scale(${scale})` }}
        className="-z-10"
        src="https://dji-official-fe.djicdn.com/dps/4eafd11dcad48d98e4643343dff28617.jpg"
        alt=""
      />
    </div>
  );
};

export default Zoomout;
