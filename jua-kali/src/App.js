import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card";
import Search from "./components/search";
import Footer from "./components/footer";
import Header from "./components/header";
function App() {
  let [data, setData] = useState([]);
  let [city, setCity] = useState("");

  useEffect(() => {
    fetch(`https://goweather.herokuapp.com/weather/${city}`)
      .then((r) => r.json())
      .then((r) => setData(r));
  }, []);

  return (
    <>
      <Header />
      <Search city={city} setCity={setCity} setData={setData} />
      <Card data={data} setCity={setData} city={city} />
      <Footer />
    </>
  );
}

export default App;
