import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card";
import Search from "./components/search";

function App() {
  let [data, setData] = useState([]);
  let [city, setCity] = useState("");

  useEffect(() => {
    fetch("https://goweather.herokuapp.com/weather/Dubai")
      .then((r) => r.json())
      .then((r) => console.log(r));
  }, []);
  return (
    <>
      <Search city={city} setCity={setCity} />
      <Card />
    </>
  );
}

export default App;
