/** @format */

import React, { useState } from "react";
import review from "./data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = review[index];
  return (
    <article className="review">
      <div className="img-container">
        <img
          src={image}
          alt={name}
          className="person-img"
        ></img>
      </div>
    </article>
  );
};

export default Review;
