import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  Move,
  Sticky,
} from "react-scroll-motion";

const FadeUp = batch(Fade(), Move(), Sticky());

const Bruh = () => {
  return (
    <ScrollContainer className="text-center">
      <ScrollPage>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "40px" }}>
            Fly through the sky in ways that seem impossible
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "40px" }}>
            We never lost our passion for flying
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "40px" }}>
            with DJI FPV, we turn imagination into reality.
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "40px" }}>
            With this immersive and intuitive aerial platform
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "40px" }}>
            get ready to go into the beyond
          </span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Bruh;
