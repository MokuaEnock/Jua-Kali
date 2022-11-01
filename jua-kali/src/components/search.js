import React from "react";

function Search({ city, setCity, setData }) {
  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=30159103c0de4e00aaa110856220111&q=${city}&aqi=yes`
    )
      .then((r) => r.json())
      .then((r) => setData(r));

  }

  /*  fetch(`https://goweather.herokuapp.com/weather/${city}`)
      .then((r) => r.json())
      .then((r) => setData(r));
    console.log("Hello"); */
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        required
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search City"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
