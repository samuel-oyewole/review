/** @format */

import React, { useState } from "react";
import data from "./data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from "react-icons/fa";

const checkNumber = (num) => {
  if (num > data.length - 1) {
    return 0;
  }
  if (num < 0) {
    return data.length - 1;
  } else {
    return num;
  }
};
const Review = () => {
  const [index, setIndex] = useState(2);
  const { name, job, image, text } = data[index];

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomPerson = Math.floor(
      Math.random() * data.length
    );
    if (randomPerson === index) {
      randomPerson = index + 1;
    }
    setIndex(checkNumber(randomPerson));
    console.log(randomPerson);
  };

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
          <FaChevronLeft
            onClick={prevPerson}
          ></FaChevronLeft>
        </button>
        <button className="prev-btn">
          <FaChevronRight
            onClick={nextPerson}
          ></FaChevronRight>
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
