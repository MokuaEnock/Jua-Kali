import React from "react";

function Card() {
  return (
    <div className="card">
      <h2 className="card_city">Nairobi</h2>
      <p className="card_temp">Temperature</p>
      <p className="card_wind">Wind</p>
      <p className="card_desc">Description</p>
      <h2 className="card_fore">Forecast</h2>
      <div className="card_buttons">
        <button>Day 1</button>
        <button>Day 2</button>
        <button>Day 3</button>
      </div>
    </div>
  );
}

export default Card;
