import React from "react";
import Hero from "./Middle/Hero";
import FourText from "./Middle/FourText";
import RotatingImage from "./Middle/RotatingImage";
import CenterFadeText from "./Middle/CenterFadeText";
import IconGrid from "./Middle/IconGrid";
import LoopText from "./Middle/LoopText";
import StaticImage from "./Middle/StaticImage";
import HeroAnimation from "./Middle/HeroAnimation";
import Zoomout from "./Zoomout";
import Replacement from "./Replacement";
import SkewImage from "./Middle/SkewImage";

const Index = () => {
  return (
    <div className="relative">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0 "
        autoPlay
        muted
      >
        <source src="./vid/DroneHero.mp4" type="video/webm" />
      </video>
      <div>
        <Hero className="relative z-10" />
        <div className="backdrop-blur-md ">
          <FourText className="relative z-10  " />
          <RotatingImage
            isImageLeft={false}
            text="Inf Drone"
            imageSrc="https://dji-official-fe.djicdn.com/dps/fab005b627b32d056534431f6bf6cc05.jpg"
          />
          <RotatingImage
            isImageLeft={true}
            text="googles"
            imageSrc="https://dji-official-fe.djicdn.com/dps/99916a8cbfe56d62e514bcb98206ed5f.jpg"
          />
          <RotatingImage
            isImageLeft={false}
            text="Controller"
            imageSrc="https://dji-official-fe.djicdn.com/dps/5a91e16b656cfb7654d4ad6fcd1327b6.jpg"
          />
          <RotatingImage
            isImageLeft={true}
            text="frame - buy now"
            imageSrc="https://dji-official-fe.djicdn.com/dps/eb13ddca0bf3eacbb562f7bd6ce4b93f.jpg"
          />
        </div>
        <CenterFadeText text="Fly through the sky in ways that seem impossible. We never lost our passion for flying, and with DJI FPV, those passions have turned imagination into reality." />
        <CenterFadeText text="With this immersive and intuitive aerial platform, get ready to go into the beyond" />
      </div>
      <div className="bg-black relative z-10">
        <IconGrid />
        <LoopText />
        <StaticImage />
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <h1 className="w-5/12 text-5xl text-center font-bold mx-auto mb-10">
            <span className="text-red-700 font-bold">
              Next-Level Immersion.
            </span>
            Unparalleled Control.
          </h1>
          <p className="w-1/2 text-center text-xl mx-auto">
            Feel the thrill of immersive flight provided by the DJI Goggles V2
            and DJI FPV's super-wide 150° FOV. HD video transmission at up to
            120fps gives you an ultra-smooth, real-time view of your flight. DJI
            FPV now supports DJI Goggles Integra and DJI Goggles 2.
          </p>
        </div>
        <HeroAnimation />
        <div className="bg-black-200 p-10 h-screen w-screen z-10"> </div>
        <Zoomout />
        <SkewImage />
        <Replacement />
        <div className="h-screen w-screen bg-red-100 z-20"> sus</div>
      </div>
    </div>
  );
};

export default Index;
