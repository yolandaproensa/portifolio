import React from "react";
import "./styles.css";

import imagem from "../assets/javascript.png";
import Menu from "../components/navbar";

export default function Home() {
  return (
    <>
      <Menu></Menu>
      <h1 align="center">Home</h1>
      <img src={imagem} alt="JS"></img>
      <p>Esta é minha primeira página em JavaScript!</p>
      <br />
      <p>
        Nesta aplicação Web apresentarei dados sobre mim. A princípio gostaria
        de me apresentar: Meu nome é Yolanda Proensa Silva, tenho 17 anos e
        estou cursando o terceiro ano do ensino médio. Moro com meus pais: Julio
        e Elaine, e sou irmã mais velha de um garoto de 8 anos, o Heitor. Nós
        temos um gato chamado Nico, nosso pimeiro gato, uma experiência
        diferente das anteriores. Eu tenho 1,70 de altura, cabelo cacheado,
        olhos verdes e nariz quebrado. Sou desbravadora e aluna do técnico em TI
        do colégio Unasp. TI nunca foi uma opção até o ensino médio, não era
        minha área de interesse, mas aprendi a gostar, agora estou fazendo meu
        primeiroprojeto em JavaScript.
      </p>
    </>
  );
}
