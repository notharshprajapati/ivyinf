import React from "react";
import ThreeSkew from "./ThreeSkew";
import TwoSkew from "./TwoSkew";
import OneSkew from "./OneSkew";

const index = () => {
  return (
    <div>
      {/* <div className="sticky top-0 bg-black"> */}
      <OneSkew />
      {/* </div> */}
      {/* <div className="h-40 "></div> */}
      {/* <div className="sticky top-0 bg-black"> */}
      <TwoSkew />
      {/* </div> */}
      {/* <div className="h-40 "></div> */}
      {/* <div className="sticky top-0 bg-black"> */}
      <ThreeSkew />
      {/* </div> */}
      {/* <div className="h-40 "></div> */}
    </div>
  );
};

export default index;
