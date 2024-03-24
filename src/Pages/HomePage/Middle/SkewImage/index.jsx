import React from "react";
import ThreeSkew from "./ThreeSkew";
import TwoSkew from "./TwoSkew";
import OneSkew from "./OneSkew";

const index = () => {
  return (
    <div>
      <OneSkew />
      <div className="h-screen"></div>
      <TwoSkew />
      <div className="h-screen"></div>
      <ThreeSkew />
      <div className="h-screen"></div>
    </div>
  );
};

export default index;
