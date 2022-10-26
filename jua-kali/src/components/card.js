import React from "react";

function Card({ data, city }) {
  return (
    <div id="card_container">
      <span id="card_image">
        <h2 className="card_city">{`${city} Country`}</h2>
      </span>

      <span className="card">
        <div className="card_temp">{data.temperature}</div>
        <div className="card_wind">{data.wind}</div>
        <div className="card_desc">{data.description}</div>
        <div className="card_fore">Forecast</div>
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
