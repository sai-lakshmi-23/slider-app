import React, { useState, useEffect, useRef } from "react";
import abs from "./radha.jpg"; // Background image
import first1 from "./assets/first1.png"; // Dog image
import video1 from "./vdo.mp4"; // Video path
import image1 from "./assets/image1.png"; // Image path
import image3 from "./assets/image3.png"; // Image path
import image4 from "./assets/image4.png"; // Image path
import image5 from "./assets/image5.png"; // Image path
import image2 from "./assets/image2.png";
import second from "./assets/second.png";
import third from "./assets/third.png";
import bg1 from "./assets/merch/black-hoodie-bck.png";
import pic1 from "./assets/merch/black-hoodie.png";
import bg2 from "./assets/merch/blue-cap-bck.png";
import pic2 from "./assets/merch/cap-mockup.png";
import bg3 from "./assets/merch/pink-tee-bck.png";
import pic3 from "./assets/merch/pink-tshirt.png";
import bg4 from "./assets/merch/yellow-tee-bck.png";
import pic4 from "./assets/merch/yellow-tshirt.png";
import pic5 from "./assets/games/guard-prev-21.png";
import pic6 from "./assets/games/lost-heritage-prev1.png";
import pic7 from "./assets/games/artifacts2.png";
import pic8 from "./assets/games/abilities2.png";
import pic9 from "./assets/games/image3-guard2.png";
import telegram from "./assets/mask-group.png"; // Dog image
import twitter from "./assets/twitter-logo.png"; // Dog image
import dall from "./assets/dall-e.png"; // Dog image

function ScrollableSlider() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState("All");
  const scrollContainerRef = useRef(null); // Reference to the horizontal scroll container

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    dall,
    third,
    image2,
  ];
  const videos = [video1,video1];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                alt={`Image ${index + 1}`}
                className="gallery-item"
              />
            ))}
          </div>
        );
      case "Videos":
        return (
          <div className="horizontal-gallery" ref={scrollContainerRef}>
            {videos.map((video, index) => (
              <video key={index} className="gallery-item" controls>
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
                alt={`Image ${index + 1}`}
                className="gallery-item"
              />
            ))}
            {videos.map((video, index) => (
              <video key={index} className="gallery-item" controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        );
    }
  };

  const img = [pic1, pic2, pic3, pic4];
  const backgrounds = [bg1, bg2, bg3, bg4]; // Add the backgrounds

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === img.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? img.length - 1 : prevIndex - 1
    );
  };

  const newImages = [pic5, pic6];

  const [newCurrentIndex, setNewCurrentIndex] = useState(0);

  const handleNext1 = () => {
    setNewCurrentIndex((prevIndex) =>
      prevIndex === newImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const imageList = [pic7, pic8, pic9];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  return (
    <div className="container">
      {/* Background Slide (Fixed) */}
      <div
        className="background-slide"
        style={{ backgroundImage: `url(${abs})` }}
      >
        <h1>This is the fixed background slide</h1>
      </div>

      {/* Scrollable Slide */}
      <div
        className="scrollable-slide"
        style={{
          transform: `translateY(${Math.max(0, 300 - scrollY * 0.5)}px)`,
        }}
      >
        <div className="content">
          <div className="dog-section">
            <img src={first1} alt="Dog" className="dog-image" />
            <div className="dog-history">
              <h3 className="history-heading">History of</h3>
              <h2 className="dog-name">Alabay</h2>
              <p>
                The Central Asian Shepherd Dog, also known as Alabay, has been a
                guardian of livestock and property for centuries. Originating
                from Central Asia, these dogs are renowned for their courage,
                strength, and loyalty.
              </p>
            </div>
          </div>

          {/* Tab Section */}
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
            <div style={{ display: "flex" }}>
              <div className="scrolls">
                <button className="scroll-button" onClick={scrollLeft}>
                  {"<"}
                </button>
              </div>
              {renderContent()}
              <div className="scrolls">
                <button className="scroll-button" onClick={scrollRight}>
                  {">"}
                </button>
              </div>
            </div>
          </div>
          <div className="head1">project vision</div>
          <div className="second">
            <img src={second} alt="Dog" className="second-img" />
          </div>
          <div className="para1">
            Our mission is to honor the heritage of the Alabay by creating a
            vibrant, loyal, and powerful community. Just as the Alabay protects
            its flock, we aim to build a pack that stands strong together.
          </div>

          <div className="head2">road map</div>
          <div>
            <div className="third">
              <div className="para2">
                Our journey is just beginning. Explore our roadmap to see the
                exciting milestones and future plans we have in store.
                <div className="para3">
                  Join us as we grow and achieve new heights
                </div>
              </div>
              <img src={third} alt="Dog" className="third-img" />
            </div>
          </div>

          <div className="fourth">
            <div className="image-container bg-dark-yellow">
              <div className="ohead">
                <div className="lhead">
                  Community Buiding and initial launch
                </div>
                <img src={image3} alt="Dog" className="image" />
              </div>
            </div>
            <div className="image-container bg-green">
              <div className="ohead">
                <div className="lhead">Merchandise Store Launch</div>
                <img src={image1} alt="Dog" className="image" />
              </div>
            </div>
            <div className="image-container bg-purple">
              <div className="ohead">
                <div className="lhead">Community events and contests</div>
                <img src={image2} alt="Dog" className="image" />
              </div>
            </div>
            <div className="image-container bg-maroon">
              <div className="ohead">
                <div className="lhead">Expansions and New features</div>
                <img src={image4} alt="Dog" className="image" />
              </div>
            </div>
          </div>
          <div className="head2">TOCKNOMICS</div>

          <div className="fifth">
            <div className="buttons">
              <button className="button1">
                <div className="l1">LIQUIDITY</div>
                <div className="l2">LOCKED</div>
              </button>
              <button className="button1">
                <div className="l1">CONTRACT</div>
                <div className="l2">RENOUNCED</div>
              </button>
              <button className="button1">
                <div className="l1">TAXES</div>
                <div className="l2">0%</div>
              </button>
            </div>
            <div>
              <img src={image5} alt="Dog" className="img5" />
            </div>
          </div>

          <div className="head1">MERCHANDISE</div>
          <div className="slide1">
            <div className="butall">
              <button className="butt1" onClick={handlePrev}>
                {"<"}
              </button>
            </div>
            {/* Image Display Box */}
            <div className="img-container">
              <img
                src={backgrounds[currentIndex]} // Use background image for the current index
                alt={`Background ${currentIndex + 1}`}
                className="background"
              />
              <img
                src={img[currentIndex]} // Use product image for the current index
                alt={`Slide ${currentIndex + 1}`}
                className="pictures"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="butall">
              <button className="butt1" onClick={handleNext}>
                {">"}
              </button>
            </div>
          </div>

          <div className="head3">GAMES</div>
          <div className="para4">Stay turned for upcoming games !</div>

          <div className="new-slide">
            {/* Image Display Box */}
            <div className="image-container">
              <img
                src={newImages[newCurrentIndex]}
                alt={`Slide ${newCurrentIndex + 1}`}
                className="new-pictures"
              />

              {/* Navigation Button inside the image (on the right side) */}
              <button className="new-butt" onClick={handleNext1}>
                {">"}
              </button>
            </div>
          </div>

          <div className="phead">
            <div className="head5">GAME &nbsp;</div>
            <div className="head6"> PREVIEWS</div>
          </div>

          <div className="slider-container">
            <div className="slides-container">
              {imageList.map((img, index) => (
                <div>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="slide-image"
                  />
                </div>
              ))}
            </div>
            <button className="slider-button" onClick={goToNextImage}>
              {">"}
            </button>
          </div>

          <div className="head7">SOCIAL MEDIA</div>
          <div className="head7">LINKS</div>

          <div className="fifth">
            <div className="custom-box">
              <div className="social-link">
                <img src={twitter} alt="Dog" />

                <span>TWITTER LINK</span>
              </div>
              <div className="social-link">
                <img src={telegram} alt="Dog" />

                <span>TELEGRAM LINK</span>
              </div>
            </div>
            <div>
              <img src={dall} alt="Dog" className="img5" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ScrollableSlider;
