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

      <style jsx>{`
        .container {
          position: relative;
          height: 100vh; /* Ensure there is enough scrollable space */
        }

        /* Fixed Background Slide */
        .background-slide {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 100vh;
          background-color: #3498db; /* Fallback color */
          background-size: cover; /* Ensure the image covers the entire background */
          background-position: center; /* Center the background image */
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          z-index: 0;
        }

        /* Scrollable Slide */
        .scrollable-slide {
          position: absolute;
          bottom: 0;
          left: 100px;
          right: 100px;
          top: 50vh;
          background-image: repeating-linear-gradient(
            to bottom,
            #ffd700 0%,
            #ffd700 10%,
            white 10%,
            white 20%,
            #ffd700 20%,
            #ffd700 31%,
            white 31%,
            white 45%,
            #ffd700 45%,
            #ffd700 54%,
            white 54%,
            white 60%,
            #ffd700 60%,
            #ffd700 70%,
            white 70%,
            white 80%,
            #ffd700 80%,
            #ffd700 80%,
            white 80%,
            white 100%
          );
          background-attachment: local;
          height: 1000vh;
          overflow-y: auto;
          z-index: 1;
          padding: 20px;
          padding-right: 20px;
          box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.2);
        }

        .dog-section {
          display: flex;
          align-items: flex-start;
          margin-top: 40px;
        }

        .dog-image {
          width: 600px;
          height: auto;
          margin-right: 20px;
        }

        .dog-history {
          max-width: 550px;
          text-align: right;
          font-weight: bold;
          font-size: 30px;
          margin-top: 30px;
          margin-right: 70px;
          color: rgba(0, 0, 0, 0.87);
          font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
        }

        .history-heading {
          font-size: 50px;
          font-weight: bold;
          margin: 0;
          font-family: "Arial", sans-serif;
          color: hsl(30, 100%, 50%);
        }

        .dog-name {
          font-size: 80px;
          font-weight: bold;
          margin: 5px 0;
          color: white;
        }

        .tab-section {
          margin-top: 130px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          aline-items: center;
        }

        .tab {
          background-color: white;
          border: none;
          color: solid 2px black;
          padding: 10px 20px;
          margin-right: 10px;
          cursor: pointer;
          font-size: 18px;
          font-weight: bold;
        }

        .tab.active {
          color: #ffd700;
        }

        .content-display {
          margin-top: 50px;
          position: relative;
        }

        /* Horizontal gallery for images/videos */
        .horizontal-gallery {
          display: flex;
          overflow-x: auto;

          padding-bottom: 20px;
          scrollbar-width: none;
        }

        .gallery-item {
          width: 300px;
          height: 250px;
          margin-right: 20px;
          scroll-snap-align: start;
        }

        .gallery-item:last-child {
          margin-right: 0;
        }

        .scrolls {
          display: flex;
          flex-direction: column;
          justify-content: center;
          aline-items: center;
          hight: 40px;
          margin: 50px;
        }
        .scroll-button {
          width: 30px;
          height: 40px;
          background-color: black;
          color: white;
        }
        .head1 {
          display: flex;
          flex-direction: row;
          justify-content: center;
          aline-items: center;
          font-size: 80px;
          font-family: "Montserrat", sans-serif;
          font-weight: bold;
          margin: 45px;
          color: #ffd700;
        }

        .second-img {
          height: 650px;
          width: 1000px;
        }
        .second {
          display: flex;
          flex-direction: row;
          justify-content: center;
          aline-items: center;
        }

        .para1 {
          font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
          max-width: 1300px;
          text-align: center;
          font-weight: bold;
          font-size: 30px;
          margin-top: 30px;
          color: rgba(0, 0, 0, 0.87);
        }

        .head2 {
          font-size: 80px;
          font-family: "Montserrat", sans-serif;
          font-weight: bold;
          margin-top: 40px;
          margin-left: 50px;
          color: white;
        }

        .third-img {
          height: 500px;
          width: 530px;
        }

        .para2 {
          font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
          max-width: 600px;

          font-weight: bold;
          font-size: 30px;
          margin-top: 70px;
          margin-left: 60px;
          margin-right: 40px;
          color: rgba(0, 0, 0, 0.87);
        }

        .para3 {
          font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
          max-width: 600px;
          font-weight: bold;
          font-size: 30px;
          margin-top: 20px;
          margin-right: 40px;
          color: #ffd700;
        }

        .third {
          display: flex;
          align-items: flex-start;
          margin-top: 2px;
        }

        .lhead {
          font-size: 30px;
          font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
          text-align: center;
          font-weight: bold;
          color: white;
        }
        .ohead {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .fourth {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 90%;
          margin-left: 45px;
          margin-top: 40px;
        }

        .image-container {
          padding: 10px;
          width: 240px;
          height: 370px;
          border-radius: 8px;
          margin-right: 20px; /* 10px space between images */
        }

        .image-container:last-child {
          margin-right: 0;
        }

        .image {
          width: 85%;
          height: auto;
        }

        .bg-dark-yellow {
          background-color: #ffd700; /* Dark Yellow */
        }

        .bg-green {
          background-color: #008000; /* Green */
        }

        .bg-purple {
          background-color: #800080; /* Purple */
        }

        .bg-maroon {
          background-color: #800000; /* Maroon */
        }

        .fifth {
          display: flex;
          flex-direction: row;
          width: 90%;
        }

        .buttons {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 90%;
        }

        .button1 {
          margin: 10px;
          background-color: black;
          height: 90px;
          width: 300px;
          text-align: left;
          border-radius: 10px;
        }
        .l1 {
          color: white;
          font-weight: bold;
          font-size: 20px;
        }
        .l2 {
          color: #ffd700;
          font-weight: bold;
          font-size: 25px;
        }
        .img5 {
          hight: 630px;
          width: 530px;
        }

        .img-container {
          position: relative;
          width: 600px;
          height: 500px;
          overflow: hidden; /* Hide overflow for proper layering */
        }
        .background {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover; /* Cover to fill the container */
        }
        .pictures {
          position: relative;
          width: 100%;
          height: 100%;
          object-fit: contain; /* Fit the product image inside */
        }
        .slide1 {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center; /* Fixed typo from aline-items to align-items */
        }

        .butt1 {
          margin: 20px;
          height: 40px;
          width: 40px;
          // border: none;           /* Remove border */
          border-radius: 50%; /* Make the button round */
          background-color: white;
        }
        .butall {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center; /* Fixed typo */
        }

        .head3 {
          display: flex;
          flex-direction: row;
          justify-content: center;
          aline-items: center;
          font-size: 80px;
          font-family: "Montserrat", sans-serif;
          font-weight: bold;
          margin-top: 130px;
          color: white;
        }

        .para4 {
          font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
          max-width: 1300px;
          text-align: center;
          font-weight: bold;
          font-size: 30px;
          margin: 10px;
          color: rgba(0, 0, 0, 0.87);
        }

        .new-pictures {
          height: 500px;
          width: 750px;
          border: 5px solid white; /* White border */
          border-radius: 10px; /* Optional rounded corners */
        }

        .image-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 70px;
        }

        .new-butt {
          position: absolute;
          right: -230px; /* Move the button slightly outside the image to ensure it's at the edge */
          top: 50%; /* Center the button vertically */
          transform: translateY(-50%); /* Adjust to center the button */
          z-index: 1;
          height: 40px;
          width: 35px;
          border-radius: 5px; /* Rounded button */
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5); /* Shadow border */
          background-color: black; /* Semi-transparent background */
          border: white 1px solid;
          cursor: pointer;
          color: white;
        }

        .new-slide {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 30px;
        }

        .slider-container {
          display: flex;
          align-items: center;
        }

        .slides-container {
          display: flex;
          overflow: hidden;
          width: 1000px;
          margin-top: 50px;
          margin-bottom: 100px;
          margin-left: 130px;
        }

        .slide-image {
          width: 90%;
          height: auto;
          border-radius: 8px;
        }

        .slider-button {
          margin-left: 15px;
          margin-top: -30px;
          background-color: black;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          height: 40px;
          width: 25px;
        }
        .slider-button:active {
          transform: scale(0.98);
        }

        .phead {
          margin-top: 130px;
          margin-left: 145px;
          display: flex;
          flex-direction: row;
          // justify-content: center;
          // aline-items: center;
        }
        .head5 {
          color: #ffd700;
          font-weight: bold;
          font-size: 40px;
        }
        .head6 {
          font-weight: bold;
          font-size: 40px;
        }
        .head7 {
          font-size: 80px;
          font-family: "Montserrat", sans-serif;
          font-weight: bold;
          margin-top: 0px;
          margin-left: 70px;
          color: #ffd700;
        }

        .custom-box {
          position: relative;
          background-color: #4a90e2;
          border: 4px solid #2c63a6;
          border-radius: 15px;
          width: 370px;
          margin-top: 200px;
          margin-right: 130px;
          margin-left: 110px;
          color: white;
          height: 220px;
          font-family: Arial, sans-serif;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        /* Top-right corner cutout */
        .custom-box::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 55px;
          height: 50px;
          background-color: #4a90e2;
          border-top-right-radius: 100%;
          box-shadow: 4px -4px 0 0 #2c63a6;
        }

        /* Social media section */
        .social-link {
          display: flex;
          align-items: center;
          margin: 40px;
        }

        .social-link img {
          width: 28px;
          height: 28px;
          margin-right: 10px;
          border: solid black 1px;
          padding: 10px;
          background-color: black;
          border-radius: 22px;
        }

        .social-link span {
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}

export default ScrollableSlider;
