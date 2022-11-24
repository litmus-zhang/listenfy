import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";


function App() {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <Cards/>
    </div>
  );
}

export default App;
