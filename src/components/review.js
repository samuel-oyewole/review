/** @format */

import React, { useState, useEffect } from "react";
import data from "./data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(3);
  const { name, job, image, text } = data[index];

  return (
    <article className="review">
      <div className="img-container">
        <img
          src={image}
          alt={name}
          className="person-img"
        ></img>
        <span className="quote-icon">
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className="prev-btn">
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
      <button className="random-btn">surprise me</button>
    </article>
  );
};

export default Review;
