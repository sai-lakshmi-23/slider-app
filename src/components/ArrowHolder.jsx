import React from "react";

const ArrowHolder = ({src, onClick, alt}) => {
  return (
    <div className="scroll-updated">
      <img
        className="scroll-button-updated"
        src={src}
        onClick={onClick}
        alt={alt}
      />
    </div>
  );
};

export default ArrowHolder;
