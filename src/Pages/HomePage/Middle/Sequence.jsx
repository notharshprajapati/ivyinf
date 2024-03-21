import React, { useRef, useEffect, useState } from "react";
import Hero from "./Hero";
import FourText from "./FourText";
import RotatingImage from "./RotatingImage";
import { Fade } from "react-reveal";

const Sequence = () => {
  const sentences = [
    "Rip through the sky",
    "with complete control",
    "Go into the beyond",
    "and redefine flying",
  ];
  const firstVideoRef = useRef(null);
  const secondVideoRef = useRef(null);
  const thirdVideoRef = useRef(null);
  const [opacity1, setOpacity1] = useState(0);
  const [opacity2, setOpacity2] = useState(0);

  //new
  const divRef = useRef(null);
  const [hookedYPosition, setHookedYPosition] = useState(0);
  const [elementTop, setElementTop] = useState(0);
  const [elementBottom, setElementBottom] = useState(0);
  const [val, setVal] = useState(0);
  const minValue = 1;
  const maxValue = 0.75;

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

  // old

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
    <div className="text-white  ">
      <div
        ref={firstVideoRef}
        className="z-10 sticky top-0 w-full h-screen text-6xl text-white "
      >
        <div className="h-screen w-full ">
          <video autoPlay muted className="w-full h-full object-cover">
            <source src="./vid/Hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute top-0 left-0 w-full h-screen z-20 flex items-center justify-center">
          <Hero />
        </div>
      </div>

      <div
        ref={secondVideoRef}
        className="z-10 sticky top-0  w-full h-screen text-6xl text-white  opacity-0 transition-opacity duration-500"
        style={{ opacity: opacity1 }}
      >
        <div ref={divRef} className="h-screen w-full bg-black">
          <img
            className="w-full h-full object-cover "
            src="/img/Hero.jpg"
            style={{ transform: `scale(${val})` }}
          />
        </div>
      </div>
      <div className="relative z-20 bg-black bg-opacity-90 ">
        <div className=" ">
          <FourText
            className="relative z-10  "
            sentences={sentences}
            heightNumber={250}
          />
          <div className="h-40"> </div>
          <RotatingImage
            isImageLeft={false}
            text="Inf Drone"
            imageSrc="./img/rotDrone.png"
            scale={1.5}
          />
          <RotatingImage
            isImageLeft={true}
            text="Goggle"
            imageSrc="./img/rotGoggle.png"
          />
          <RotatingImage
            isImageLeft={false}
            text="Controller"
            imageSrc="./img/rotCont.png"
            scale={1.25}
          />
          <RotatingImage
            isImageLeft={true}
            text="Frame"
            imageSrc="./img/rotFrame.png"
            scale={1.25}
          />
          <div className="w-full  h-10"></div>
        </div>
      </div>

      <div
        ref={thirdVideoRef}
        className="z-10 sticky top-0  w-full h-screen text-6xl text-white  opacity-0 transition-opacity duration-500"
        style={{ opacity: opacity2 }}
      >
        <div className="h-screen w-full ">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="./vid/3rdvid.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="relative z-20 w-full text-4xl h-full">
        <div className="z-30 text-white  ">
          <div className="h-screen w-screen relative flex items-center justify-center font-semibold text-center">
            <Fade bottom>
              Fly through the sky in ways that seem impossible.
            </Fade>
          </div>{" "}
          <div className="h-screen w-screen relative flex items-center justify-center font-semibold text-center">
            <Fade bottom>We never lost our passion for flying</Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sequence;
