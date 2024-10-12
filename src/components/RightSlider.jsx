import React, { useRef, useState } from "react";
import video1 from "../vdo.mp4"; // Video path
import image1 from "../assets/image1.png"; // Image path
import image3 from "../assets/image3.png"; // Image path
import image4 from "../assets/image4.png"; // Image path
import image5 from "../assets/image5.png"; // Image path
import image2 from "../assets/image2.png";
import RightArrow from "../assets/images/right-arrow.svg";
import LeftArrow from "../assets/images/left-arrow.svg";
import ArrowHolder from "./ArrowHolder";

const RightSlider = () => {
  const images = [image1, image2, image3, image4, image5];
  const videos = [video1, video1];

  const [activeTab, setActiveTab] = useState("All");
  const scrollContainerRef = useRef(null); // Reference to the horizontal scroll container

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  // Function to render content based on the selected tab
  const renderContent = () => {
    switch (activeTab) {
      case "Images":
        return (
          <div className="horizontal-gallery" ref={scrollContainerRef}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Images ${index + 1}`}
                className="gallery-item-updated"
              />
            ))}
          </div>
        );
      case "Videos":
        return (
          <div className="horizontal-gallery" ref={scrollContainerRef}>
            {videos.map((video, index) => (
              <video key={index} className="gallery-item-updated" controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        );
      default: // "All"
        return (
          <div className="horizontal-gallery" ref={scrollContainerRef}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Images ${index + 1}`}
                className="gallery-item-updated"
              />
            ))}
            {videos.map((video, index) => (
              <video key={index} className="gallery-item-updated" controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        );
    }
  };
  return (
    <>
      <div className="tab-section">
        <button
          onClick={() => setActiveTab("All")}
          className={`tab ${activeTab === "All" ? "active" : ""}`}
        >
          ALL
        </button>
        <button
          onClick={() => setActiveTab("Images")}
          className={`tab ${activeTab === "Images" ? "active" : ""}`}
        >
          IMAGES
        </button>
        <button
          onClick={() => setActiveTab("Videos")}
          className={`tab ${activeTab === "Videos" ? "active" : ""}`}
        >
          VIDEOS
        </button>
      </div>
      <div className="content-display">
        <div style={{ display: "flex", padding: "20px" }}>
          <ArrowHolder src={LeftArrow} onClick={scrollLeft} alt="left arrow" />
          <div className="right-scroll">{renderContent()}</div>
          <ArrowHolder src={RightArrow} onClick={scrollRight} alt="right arrow" />
        </div>
      </div>
    </>
  );
};

export default RightSlider;
