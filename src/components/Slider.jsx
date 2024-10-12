import React, { useEffect, useState } from "react";
import RightSlider from "./RightSlider";
import Home from "./Home";

const Slider = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="scrollable-slider"
      style={{
        transform: `translateY(${Math.max(0, 300 - scrollY * 0.5)}px)`,
      }}
    >
      <div className="wrapper">
        <Home />
        <RightSlider />
      </div>
    </div>
  );
};

export default Slider;
