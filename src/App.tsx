import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import {Footer} from  "./components/Footer/Footer"


function App() {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
