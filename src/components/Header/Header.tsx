import { Heading } from "@chakra-ui/react";
import React from "react";
import { AppButton } from "./connect";

function Header() {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-black text-white ">
        <h1 className="text-2xl font-bold">Listenfy🎶</h1>
        <nav>
          <AppButton
            label="Connect Wallet"
            colorScheme="yellow"
            onClick={() => console.log("clicked")}
          />
        </nav>
      </header>
    </div>
  );
}

export default Header;

// flex p-2 bg-black text-white w-full justify-center
