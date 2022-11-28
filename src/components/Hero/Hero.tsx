import React from "react";
import { AppButton } from "../Header/connect";

const Hero = () => {
  return (
    <div className=" flex flex-col items-center justify-center m-4 ">
      <div className="text-center my-3 max-h-full">
        <h1 className="text-4xl mb-2 font-semibold">
          <strong className="text-yellow-600">ListenFy 🎶🎶 </strong>
          The Home of Quality Music
        </h1>
        <p>
          ListenFy is a music streaming platform that allows you to listen to
          onChain Music
        </p>
      </div>

      <AppButton
        label="Connect Wallet"
        colorScheme="yellow"
        onClick={() => console.log("clicked")}
      />
    </div>
  );
};

export default Hero;
