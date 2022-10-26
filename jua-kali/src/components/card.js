import React from "react";

function Card() {
  return (
    <div id="card_container">
      <span id="card_image">
        <h2 className="card_city">Nairobi</h2>
      </span>
      <span className="card">
        <p className="card_temp">Temperature</p>
        <p className="card_wind">Wind</p>
        <p className="card_desc">Description</p>
        <h2 className="card_fore">Forecast</h2>
        <div className="card_buttons">
          <button>Day 1</button>
          <button>Day 2</button>
          <button>Day 3</button>
        </div>
      </span>
    </div>
  );
}

export default Card;
