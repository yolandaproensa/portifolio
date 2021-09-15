import React from "react";
import "./styles.css";

import imagem from "../assets/Vitin.jpg";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <img src={imagem} alt="Vitin"></img>
    </>
  );
}
