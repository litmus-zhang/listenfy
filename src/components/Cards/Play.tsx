import React from "react";
import { FaPlay } from "react-icons/fa";
import "./Cards.css";

const Play = () => {
  return (
    <button className="bg-yellow-400 flex items-center justify-center animate-pulse rounded-full  w-10 h-10 item-center">
      <FaPlay />
    </button>
  );
};

export default Play;
