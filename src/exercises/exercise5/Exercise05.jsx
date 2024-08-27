// Exercise05.js
import React from "react";
import Card from "./card.jsx";
import "./exerciseContainer.css";
const Exercise05 = () => {
  return (
    <div>
      <h1>Exercise05</h1>

      <div className="container"> 
        <h2>Cards</h2>
      <Card />
      <Card />
      <Card />
      <Card />
     </div>
    </div>
  );
};

export default Exercise05;
