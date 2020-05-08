import React from "react";
import PropTypes from "prop-types";

function Food({ id, name, score, rating }) {
  return (
    <span>
      <h1>I like {name} </h1>
      <h2>{score}</h2>
      <h2>{rating}</h2>
    </span>
  );
}

const foodILike = [
  {
    id: 1,
    name: "bibimbap",
    score: 10,
    rating: 5,
  },
  {
    id: 2,
    name: "kimbap",
    score: 6,
    rating: 4.8,
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} score={dish.score} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
