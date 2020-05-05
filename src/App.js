import React from "react";

function Food({ name, score }) {
  return (
    <span>
      <h1>I like {name} </h1>
      <h2>{score}</h2>
    </span>
  );
}

const foodILike = [
  {
    id: 1,
    name: "bibimbap",
    score: 10,
  },
  {
    id: 2,
    name: "kimbap",
    score: 5,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} score={dish.score} />
      ))}
    </div>
  );
}

export default App;
