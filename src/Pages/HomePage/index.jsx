import React from "react";
import ScrollHeader from "../../Components/ScrollHeader";
import ProductDisplay from "./ProductDisplay";
import HeroSection from "./HeroSection";
import ScrollTextSection from "./ScrollTextSection";
import IconGrid from "./IconGrid";
import HeroSectio from "./HeroSectio";
import SkewImage from "./SkewImage";
const index = () => {
  return (
    <div>
      <HeroSection />
      <ScrollTextSection />
      <IconGrid />
      <HeroSectio />
      <SkewImage />
      <ProductDisplay isImageLeft={true} />
      <ProductDisplay isImageLeft={false} />
      <ProductDisplay isImageLeft={true} />
      <ProductDisplay isImageLeft={false} />
      {/* <ScrollHeader /> */}
    </div>
  );
};

export default index;
