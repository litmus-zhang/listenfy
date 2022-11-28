import React from "react";
import "./Footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>&#169; ListenFy 🎶🎶 {year} All Rights Reserved.</footer>;
};
