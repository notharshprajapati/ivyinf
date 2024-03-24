import React from "react";
import { Fade } from "react-reveal";

const FourText = ({ sentences }) => {
  return (
    <div className="text-3xl sm:text-5xl md:text-6xl h-full font-bold">
      {sentences.map((sentence, index) => (
        <Fade bottom delay={index * 250}>
          <div
            key={index}
            className="z-10 h-40 flex items-center justify-center "
          >
            <div className="w-full flex justify-center items-center text-center">
              {sentence}
            </div>
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default FourText;
