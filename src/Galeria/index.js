import React from "react";
import Menu from "../components/navbar";
import "./style.css";

import imagem1 from "../assets/calcada.jpeg";
import imagem2 from "../assets/ceu.jpeg";
import imagem3 from "../assets/flor.jpeg";
import imagem4 from "../assets/mao.jpeg";
import imagem5 from "../assets/pirulito.jpeg";
import imagem6 from "../assets/placa.jpeg";

export default function Galeria() {
  return (
    <>
      <Menu></Menu>
      <h1 align="center">Galeria</h1>
      <h2 align="center">Minimus Photo</h2>
      <br />

      <img src={imagem1} alt="calçada"></img>
      <img src={imagem2} alt="ceu"></img>
      <img src={imagem3} alt="flor"></img>
      <img src={imagem4} alt="mao"></img>
      <img src={imagem5} alt="pirulito"></img>
      <img src={imagem6} alt="placa"></img>
    </>
  );
}
