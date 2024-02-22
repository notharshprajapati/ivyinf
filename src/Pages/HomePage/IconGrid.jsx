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
  <div className="flex flex-col items-center justify-center p-4 bg-gray-200">
    <div className="h-60 self-stretch flex flex-col items-start overflow-hidden">
      <div className="w-60 h-60 flex items-center justify-center overflow-hidden">
        {icon}
      </div>
      <div className="flex flex-col items-start self-stretch p-0.5">
        <h4 className="text-lg font-semibold">{subheading}</h4>
      </div>
    </div>
  </div>
);

const IconGrid = () => (
  <div className="px-80 m-40 bg-red-100">
    <div className="grid grid-cols-3 gap-4">
      <IconBox icon={<FaApple size={80} />} subheading="iOS" />
      <IconBox icon={<FaAndroid size={80} />} subheading="Android" />
      <IconBox icon={<FaWindows size={80} />} subheading="Windows" />
      <IconBox icon={<FaLinux size={80} />} subheading="Linux" />
      <IconBox icon={<FaChrome size={80} />} subheading="Chrome" />
      <IconBox icon={<FaFirefox size={80} />} subheading="Firefox" />
    </div>
  </div>
);

export default IconGrid;
