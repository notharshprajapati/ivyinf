import React, { useState, useEffect } from "react";

const ScrollHeader = () => {
  const [isScrolled, setIsScrolled] = useState("false");
  const [link, setlink] = useState(
    "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/0001.jpg"
  );
  useEffect(() => {
    console.log(window.scrollY);
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    setlink(
      `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${Math.floor(
        window.scrollY
      )
        .toString()
        .padStart(4, "0")}.jpg`
    );
    console.log(link);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return (
    <div
      id="headerwrap"
      className={`${
        isScrolled ? " static" : "sticky top-0 "
      } bg-black w-full h-screen`}
    >
      <img
        className="object-cover object-center w-full h-full ph-40"
        src={link}
        alt=""
      />
    </div>
  );
};

export default ScrollHeader;
