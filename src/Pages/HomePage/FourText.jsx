import React, { useEffect, useState } from "react";

const FourText = () => {
  const texts = [
    "Rip through the sky",
    "with complete control",
    "Go into the beyond",
    "and redefine flying",
  ];
  const [opacities, setOpacities] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollCenter = window.scrollY + windowHeight / 2;

      // Calculate opacity for each row independently with a delay
      const newOpacities = opacities.map((_, index) => {
        const rowElement = document.getElementById(`row-${index + 1}`);
        if (rowElement) {
          const rect = rowElement.getBoundingClientRect();
          const rowCenter = rect.top + rect.height / 2;

          // Calculate opacity based on the distance from the row center to the scroll center
          const distance = Math.abs(rowCenter - scrollCenter);
          const opacity = Math.min(Math.max(distance / windowHeight, 0), 1);

          return opacity;
        }

        return 0;
      });

      // Update opacity state
      setOpacities(newOpacities);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [opacities]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center ">
      {opacities.map((opacity, index) => (
        <div
          key={index}
          id={`row-${index + 1}`}
          style={{ opacity }}
          className={`text-4xl md:text-6xl mb-20`}
        >
          {texts[index]}
        </div>
      ))}
    </div>
  );
};

export default FourText;
