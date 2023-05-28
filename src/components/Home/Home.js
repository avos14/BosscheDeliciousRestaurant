import React from "react";
import a from "./images/A.png";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-description">
        <h1 className="description">Laat je maag het woord doen</h1>

      </div>
      <div className="img">
        <img className="img-pic" src={a} alt="Hand holding flower" />
      </div>
    </div>
  );
}

export default Home;

