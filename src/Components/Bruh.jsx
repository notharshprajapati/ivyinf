import React, { useRef, useEffect, useState } from "react";

const Bruh = () => {
  const divRef = useRef(null);
  const [hookedYPosition, setHookedYPosition] = useState(0);
  const [elementTop, setElementTop] = useState(0);
  const [elementBottom, setElementBottom] = useState(0);
  const [val, setVal] = useState(0);
  const minValue = 0.1;
  const maxValue = 0;

  useEffect(() => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      setElementTop(window.scrollY + rect.top);
      setElementBottom(window.scrollY + rect.bottom);
    }
  }, [divRef]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY >= elementTop && currentScrollY <= elementBottom) {
        setHookedYPosition(
          (currentScrollY - elementTop) / (elementBottom - elementTop)
        );
      } else if (currentScrollY < elementTop) {
        setHookedYPosition(0);
      } else if (currentScrollY > elementBottom) {
        setHookedYPosition(1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      setHookedYPosition(0); // Reset the rotation when the component is unmounted
    };
  }, [elementTop, elementBottom]);

  useEffect(() => {
    setVal((maxValue - minValue) * hookedYPosition + minValue);
  }, [hookedYPosition]);

  return (
    <div>
      <div className="h-[300vh] w-full bg-orange-500">top</div>
      <div className="fixed bottom-0 z-50">{val}</div>
      <div ref={divRef}>
        <div className="fixed bottom-0 text-teal-50 ">
          <img
            className="fixed top-0 z-10 "
            src="/img/Hero.jpg"
            style={{ transform: `scale(${val})` }}
          />
        </div>
        <div className="h-[800vh] w-full bg-purple-500">temp</div>
      </div>
      <div className="h-[300vh] w-full bg-red-500">bottom</div>
    </div>
  );
};

export default Bruh;
