import React from "react";
import {
  FaApple,
  FaAndroid,
  FaWindows,
  FaLinux,
  FaChrome,
  FaFirefox,
} from "react-icons/fa";

const IconBox = ({ icon, subheading }) => (
  <div className="py-4 flex flex-col items-start justify-center border-b-2 ">
    <div className="flex items-center justify-center overflow-hidden pb-5 text-red-600">
      {icon}
    </div>
    <div className="flex flex-col items-start pb-5">
      <h4 className="text-4xl font-semibold ">{subheading}</h4>
    </div>
  </div>
);

const IconGrid = () => (
  <div className="h-screen w-screen flex items-center justify-center ">
    <div className="grid grid-cols-3 gap-4">
      <IconBox icon={<FaApple size={80} />} subheading=" iOS iOS iOS  " />
      <IconBox icon={<FaAndroid size={80} />} subheading="  Android Android " />
      <IconBox icon={<FaWindows size={80} />} subheading=" Windows Windows " />
      <IconBox icon={<FaLinux size={80} />} subheading=" Linux Linux Linux " />
      <IconBox icon={<FaChrome size={80} />} subheading=" Chrome Chrome  " />
      <IconBox icon={<FaFirefox size={80} />} subheading="Firefox Firefox  " />
    </div>
  </div>
);

export default IconGrid;
