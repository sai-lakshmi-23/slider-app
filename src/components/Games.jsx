import React, { useState } from "react";
import pic5 from "../assets/games/guard-prev-21.png";
import pic6 from "../assets/games/lost-heritage-prev1.png";
import ArrowHolder from "./ArrowHolder";
import RightArrow from "../assets/images/right-arrow.svg";
import LeftArrow from "../assets/images/left-arrow.svg";
import ButtonArrow from "../assets/images/button-arrow.svg";
import GamePreview1 from "../assets/images/game-preview-img1.svg";
import GamePreview2 from "../assets/images/game-preview-img2.svg";
import GamePreview3 from "../assets/images/game-preview-img3.svg";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import SocialMedia from "./SocialMedia";

// Wrapper for the image with a smoother transition effect
const ImageWrapper = styled.img`
  border-radius: 10px;
  width: -webkit-fill-available;
  border-radius: 2rem;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  transform: ${({ direction }) =>
    direction === "left"
      ? "translateX(-30%)"
      : direction === "right"
      ? "translateX(30%)"
      : "translateX(0)"};
  opacity: ${({ direction }) => (direction ? 0 : 1)};
`;

// Container for the images and arrows
const Container = styled.div`
  margin: auto;
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Header = styled.div`
  font-size: 6rem;
  font-family: "CHEESEBURGA", sans-serif;
  color: rgba(255, 255, 255, 1);
  margin: 5rem auto 2rem;
  width: 100%;
  text-align: center;
`;

const Typography = styled.div`
  font-size: 2rem;
  margin: auto;
  margin-bottom: 2rem;
  width: 100%;
  font-weight: 900;
  text-align: center;
`;

const AdjustArrowLeft = styled.div`
  z-index: 4;
  position: absolute;
  left: 0;
`;

const AdjustArrowRight = styled.div`
  position: absolute;
  right: 0;
`;

const Button = styled.button`
  border: none;
  box-shadow: 12px 11px 11.3px 0px rgba(0, 0, 0, 0.61);
  background: rgba(132, 58, 252, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2rem;
  padding: 1rem 2rem;
  border-radius: 8rem;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 1);

  & :hover {
    cursor: pointer;
  }
`;

const IconRight = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  margin-left: 1.2rem;
`;

const Label = styled.label`
  color: ${({ color = "red" }) => color};
  padding: 0.3rem;
  font-weight: 900;
  font-size: 2rem;
`;
const LabelWrapper = styled.div`
  margin: 5rem auto 0;
  width: 80%;
`;
const Text = styled.label`
  font-weight: 900;
`;

const Games = () => {
  const newImages = [pic5, pic6];
  const images = [GamePreview1, GamePreview2, GamePreview3];

  const [newCurrentIndex, setNewCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null); // Track the direction of the transition

  const handleNext = () => {
    setDirection("right");
    setTimeout(() => {
      setNewCurrentIndex((prevIndex) =>
        prevIndex === newImages.length - 1 ? 0 : prevIndex + 1
      );
      setDirection(null);
    }, 500); // Time delay to sync with transition duration
  };

  const handlePrevious = () => {
    setDirection("left");
    setTimeout(() => {
      setNewCurrentIndex((prevIndex) =>
        prevIndex === 0 ? newImages.length - 1 : prevIndex - 1
      );
      setDirection(null);
    }, 500); // Time delay to sync with transition duration
  };

  return (
    <div>
      <Header>GAMES</Header>
      <Typography>Stay tuned for upcoming games!</Typography>
      <Container>
        <AdjustArrowLeft>
          <ArrowHolder
            src={LeftArrow}
            onClick={handlePrevious}
            alt="left arrow"
          />
        </AdjustArrowLeft>
        <ImageWrapper
          src={newImages[newCurrentIndex]}
          alt={`Slide ${newCurrentIndex + 1}`}
          direction={direction}
        />
        <Button>
          <Text>DISCOVER</Text>
          <IconRight src={ButtonArrow} alt="right button arrow" />
        </Button>

        <AdjustArrowRight>
          <ArrowHolder
            src={RightArrow}
            onClick={handleNext}
            alt="right arrow"
          />
        </AdjustArrowRight>
      </Container>
      <LabelWrapper>
        <Label color="rgba(255, 168, 0, 1)">GAME</Label>
        <Label color="rgba(53, 53, 53, 1)">PREVIEWS</Label>
      </LabelWrapper>
      <ImageSlider images={images} />
      <SocialMedia />
    </div>
  );
};

export default Games;
