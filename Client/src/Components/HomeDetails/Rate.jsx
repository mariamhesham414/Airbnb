import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import axiosInstance from "../../AxiosConfig/instance";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starsContainerStyle = {
  display: "flex",
};

StarsRating.propTypes = {
  maxValue: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  defaultRating: PropTypes.number,
};

export default function StarsRating({
  maxValue = 5,
  color = "#fcc419",
  size = 24,
  className = "",
  messages = [],
  defaultRating = 0,
  id,
}) {
  const textStyle = {
    color,
    fontSize: `${size / 1.5}px`,
  };

  const [rate, setRate] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRateChange = () => {
    if (!comment || rate < 1) return alert("Please enter a comment an rate");
    axiosInstance
      .post("/reviews", { houseId: id, rate, review: comment })
      .then((res) => console.log(res));
  };
  const handleRate = (rating) => {
    setRate(() => rating);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="rate d-flex mb-3">
          <div style={containerStyle} className={className}>
            <div style={starsContainerStyle}>
              {Array.from({ length: maxValue }, (_, i) => (
                <Star
                  key={i}
                  fullStar={tempRating ? tempRating >= i + 1 : rate >= i + 1}
                  onRate={() => handleRate(i + 1)}
                  onHoverIn={() => setTempRating(i + 1)}
                  onHoverOut={() => setTempRating(0)}
                  color={color}
                  size={size}
                />
              ))}
            </div>
            {/* <p style={textStyle}>
              {messages.length === maxValue
                ? messages[tempRating ? tempRating - 1 : rate - 1]
                : tempRating || rate || ""}
            </p> */}
          </div>
        </div>
        <div className="comment">
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            className="border h-20 w-75"
            placeholder="Comment"
            onChange={(e) => {
              setComment(e.target.value);
              console.log(comment);
            }}
          ></textarea>
        </div>
        <div
          className="btn btn-secondary fw-medium rounded-1 px-4 py-2"
          onClick={handleRateChange}
        >
          Finish
        </div>
      </div>
    </>
  );
}

function Star({ fullStar, onRate, onHoverIn, onHoverOut, color, size }) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    cursor: "pointer",
  };
  return (
    <span
      style={starStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {fullStar ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
