import React from "react";

function Search({ city, setCity }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(city);
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
