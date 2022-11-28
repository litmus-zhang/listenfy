import React from "react";
import "./Cards.css";
import { Card } from "./Card";
import { MUSIC } from "../../utils/constants";

const Cards = () => {
  return (
    <div className="cards">
      <h2>Now Trending!</h2>
      <div className="flex flex-wrap gap-2 my-2">
        {MUSIC.map((music, index) => {
          return (
            <Card
              key={index}
              image={music.img}
              title={music.name}
              artist={music.artist}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
