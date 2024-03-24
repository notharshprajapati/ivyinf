import React, { useEffect, useRef, useState } from "react";

const Bruh = () => {
  const firstVideoRef = useRef(null);
  const secondVideoRef = useRef(null);
  const thirdVideoRef = useRef(null);
  const [opacity1, setOpacity1] = useState(0);
  const [opacity2, setOpacity2] = useState(0);

  useEffect(() => {
    const options = {
      threshold: 1, // Trigger when the element is completely in view
    };

    const handleIntersection1 = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the element is in view, set opacity to 1
          setOpacity1(1);
        } else {
          // If the element is out of view, set opacity to 0
          setOpacity1(0);
        }
      });
    };

    const handleIntersection2 = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the element is in view, set opacity to 1
          setOpacity2(1);
        }
      });
    };

    const observer1 = new IntersectionObserver(handleIntersection1, options);
    const observer2 = new IntersectionObserver(handleIntersection2, options);

    // Observe the second video element
    if (secondVideoRef.current) {
      observer1.observe(secondVideoRef.current);
    }

    // Observe the third video element
    if (thirdVideoRef.current) {
      observer2.observe(thirdVideoRef.current);
    }

    // Cleanup the observers when component unmounts
    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (secondVideoRef.current) {
        // Get the position of the image on the page
        const imgRect = secondVideoRef.current.getBoundingClientRect();
        const imgCenterY = imgRect.top + imgRect.height / 2;

        // Get the middle of the page
        const middleOfPage = window.innerHeight / 2;

        // Calculate the rotation based on the position of the image on the page
        const maxRotation = 10; // Maximum rotation in degrees
        const distanceToMiddle = imgCenterY - middleOfPage;
        const newRotation = (distanceToMiddle / middleOfPage) * maxRotation;

        // Set the rotation state
        setRotation(newRotation);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Trigger initial rotation on mount
    handleScroll();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full h-full">
      <div
        ref={firstVideoRef}
        className="z-10 sticky top-0 w-full h-screen bg-orange-500 "
      >
        <div className=" relative w-full h-screen ">1</div>
      </div>
      <div
        ref={secondVideoRef}
        className="z-10 sticky top-0  w-full h-screen bg-yellow-500 opacity-0 transition-opacity duration-500"
        style={{ opacity: opacity1 }}
      >
        <div className=" relative w-full h-screen ">2</div>
      </div>
      <div
        ref={thirdVideoRef}
        className="z-10 sticky top-0  w-full h-screen bg-red-500 opacity-0 transition-opacity duration-500"
        style={{ opacity: opacity2 }}
      >
        <div className=" relative w-full h-screen ">3</div>
      </div>
    </div>
  );
};

export default Bruh;
