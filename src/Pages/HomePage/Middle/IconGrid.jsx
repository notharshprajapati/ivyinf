import React from "react";
import {
  FaApple,
  FaAndroid,
  FaWindows,
  FaLinux,
  FaChrome,
  FaFirefox,
} from "react-icons/fa";
import { Fade } from "react-reveal";

const IconBox = ({ icon, subheading }) => (
  <div className="w-full px-2  sm:w-64 mt-10 flex flex-col items-center justify-center border-b-2 sm:border-b-0 border-transparent bg-gray-900 bg-opacity-10 rounded-lg p-4">
    <div className="flex items-center justify-center overflow-hidden pb-5 text-orange-600">
      {icon}
    </div>
    <div className="flex flex-col items-center pb-4">
      <h4 className="text-xl sm:text-3xl   font-semibold text-center">
        {subheading}
      </h4>
    </div>
  </div>
);

const IconGrid = () => (
  <div className="h-full w-screen  flex items-center justify-center my-20">
    <div className="grid grid-cols-2  md:grid-cols-3  gap-4">
      <Fade bottom delay={100}>
        <IconBox
          icon={<FaApple size={80} />}
          subheading="High-Quality Optics"
        />
      </Fade>
      <Fade bottom delay={200}>
        <IconBox
          icon={<FaAndroid size={80} />}
          subheading="Real-Time Feedback"
        />
      </Fade>
      <Fade bottom delay={300}>
        <IconBox icon={<FaWindows size={80} />} subheading="Secure Mounting" />
      </Fade>
      <Fade bottom delay={400}>
        <IconBox icon={<FaLinux size={80} />} subheading="Customizable Fit" />
      </Fade>
      <Fade bottom delay={500}>
        <IconBox
          icon={<FaChrome size={80} />}
          subheading="Seamless Integration"
        />
      </Fade>
      <Fade bottom delay={600}>
        <IconBox
          icon={<FaFirefox size={80} />}
          subheading="Professional Grade"
        />
      </Fade>
    </div>
  </div>
);

export default IconGrid;
