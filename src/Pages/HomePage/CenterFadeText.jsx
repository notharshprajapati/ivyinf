import React, { useState, useEffect, useRef } from "react";

const CenterFadeText = ({ text }) => {
  const [opacity, setOpacity] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const textRect = textRef.current.getBoundingClientRect();
        const textCenterY = textRect.top + textRect.height / 2;
        const middleOfPage = window.innerHeight / 2;

        const maxOpacity = 100;
        const distanceToMiddle = Math.abs(textCenterY - middleOfPage);

        // Use a power function to adjust the opacity calculation
        const power = 2; // Adjust this value for the desired gradient
        const newOpacity = Math.max(
          0,
          maxOpacity -
            Math.pow((distanceToMiddle * 4) / middleOfPage, power) * maxOpacity
        );

        setOpacity(newOpacity);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="h-screen w-screen relative flex items-center justify-center z-10">
      <span
        ref={textRef}
        style={{
          opacity: `${opacity}%`,
        }}
        className="text-2xl w-1/2 font-semibold text-center"
      >
        {text}
      </span>
    </div>
  );
};

export default CenterFadeText;
