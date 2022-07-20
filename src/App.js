import React from "react";
import "./App.css";
import NavBar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Card from "./components/card.jsx";
import Data from "./data.js";

function App() {
  const cards = Data.map((card) => {
    return <Card key={card.id} data={card} />;
  });

  return (
    <div>
      <NavBar />
      <Hero />
      <div className="card-list">{cards}</div>
    </div>
  );
}

export default App;
