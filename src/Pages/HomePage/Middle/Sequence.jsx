import React, { useRef, useEffect, useState } from "react";
import SeqVid from "./SeqVid";
import Sus from "./Sus";
import Hero from "./Hero";
import FourText from "./FourText";
import RotatingImage from "./RotatingImage";
import CenterFadeText from "./CenterFadeText";
import { ScrollContainer } from "react-scroll-motion";
import Apple from "./Apple";

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

  return (
    <div className="text-white  ">
      <div
        ref={firstVideoRef}
        className="z-10 sticky top-0 w-full h-screen text-6xl text-white "
      >
        <SeqVid
          className="h-screen w-full"
          numFrames={108}
          location={"Hero/Image"}
        />
        <div className="absolute top-0 left-0 w-full h-screen z-20 flex items-center justify-center">
          <Hero />
        </div>
      </div>

      <div
        ref={secondVideoRef}
        className="z-10 sticky top-0  w-full h-screen text-6xl text-white  opacity-0 transition-opacity duration-500"
        style={{ opacity: opacity1 }}
      >
        <Apple
          className
          numFrames={37}
          location={"LinesVideo/LV"}
          scrollHeight={2160}
          scrollSpeed={0.25}
          format={"jpg"}
        />
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
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="./vid/3rdvid.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-20 w-full text-4xl h-full">
        <ScrollContainer className="z-30 text-white ">
          <CenterFadeText text="Fly through the sky in ways that seem impossible." />
          <CenterFadeText text="We never lost our passion for flying" />
        </ScrollContainer>
      </div>
    </div>
  );
};

export default Sequence;
