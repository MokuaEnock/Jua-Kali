import React from "react";

function Search({ city, setCity, setData }) {

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://goweather.herokuapp.com/weather/${city}`)
      .then((r) => r.json())
      .then((r) => setData(r));
      console.log("Hello")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search City"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
