import React from "react";
import "./Cards.css";
import Play from "./Play";

interface CardProps {
  image: string;
  title: string;
  artist: string;
  price?: string;
}

export const Card = (props: CardProps) => {
  const { image, title, artist } = props;
  const imageStyle = "w-full h-72 object-cover rounded-md";

  return (
    <div className="group w-[320px] h-[400px] flex flex-col justify-between p-2 bg-slate-400  rounded-md overflow-hidden hover:shadow-lg hover:bg-slate-800 transition duration-150 ease-out hover:ease-in ">
      <img src={image} className={imageStyle} alt={title} />
      <div className="group-hover:text-white flex justify-between items-center">
        <div className="mb-3">
          <h3>{title}</h3>
          <p>{artist}</p>
        </div>
        <Play />
      </div>
    </div>
  );
};
