import React, { useRef, useEffect, useState } from "react";
import SeqVid from "./SeqVid";
import Sus from "./Sus";
import Hero from "./Hero";
import FourText from "./FourText";
import RotatingImage from "./RotatingImage";
import CenterFadeText from "./CenterFadeText";
import { ScrollContainer } from "react-scroll-motion";

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
        } else {
          // If the element is out of view, set opacity to 0
          setOpacity2(0);
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
      // className={`${
      //   opacity1 === 1 || opacity2 === 1 ? "opacity-0" : "opacity-1"
      // }`}
      >
        <div
          ref={firstVideoRef}
          className="z-10 sticky top-0 w-full h-screen text-6xl text-white "
        >
          <SeqVid numFrames={108} location={"Hero/Image"} />
          <div className="absolute top-0 left-0 w-full h-screen z-20 flex items-center justify-center">
            <Hero />
          </div>
        </div>
      </div>

      <div
        ref={secondVideoRef}
        className="z-10 sticky top-0  w-full h-screen text-6xl text-white  opacity-0 transition-opacity duration-500"
        style={{ opacity: opacity1 }}
      >
        <Sus
          width={1920}
          height={1080}
          numFrames={37}
          location={"LinesVideo/LV"}
          scrollHeight={2160}
          format={"jpg"}
        />
      </div>

      <div className="relative z-20  ">
        <div className="bg-black bg-opacity-90 ">
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
          />
          <RotatingImage
            isImageLeft={true}
            text="Frame"
            imageSrc="./img/rotFrame.png"
          />
        </div>
      </div>

      <div
        ref={thirdVideoRef}
        className="z-10 sticky top-0  w-full h-screen text-6xl text-white  opacity-0 transition-opacity duration-500"
        style={{ opacity: opacity2 }}
      >
        <video autoPlay muted loop>
          <source src="./vid/newVid.mp4" type="video/mp4" />
        </video>
      </div>
      {/* <div className="z-30  text-white">
        <ScrollContainer>
          <CenterFadeText text="Fly through the sky in ways that seem impossible." />
          <CenterFadeText text="We never lost our passion for flying" />
          <CenterFadeText text="with DJI FPV, those passions have turned imagination into reality." />
          <CenterFadeText text="With this immersive and intuitive aerial platform" />
          <CenterFadeText text="get ready to go into the beyond" />
        </ScrollContainer>
      </div> */}

      <div className="relative z-20 w-full h-screen text-6xl">
        <div className="z-30 text-">
          <ScrollContainer>
            <CenterFadeText text="Fly through the sky in ways that seem impossible." />
            <CenterFadeText text="We never lost our passion for flying" />
            <CenterFadeText text="with DJI FPV, those passions have turned imagination into reality." />
            <CenterFadeText text="With this immersive and intuitive aerial platform" />
            <CenterFadeText text="get ready to go into the beyond" />
          </ScrollContainer>
        </div>
      </div>
    </div>
  );
};

export default Sequence;
