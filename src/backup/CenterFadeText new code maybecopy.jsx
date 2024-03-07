import React from "react";
import {
  Animator,
  ScrollPage,
  batch,
  Fade,
  Move,
  Sticky,
} from "react-scroll-motion";

const CenterFadeText = ({ text }) => {
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <ScrollPage className="text-center">
      <Animator animation={FadeUp}>
        <span style={{ fontSize: "40px" }}>{text}</span>
      </Animator>
    </ScrollPage>
  );
};

export default CenterFadeText;
