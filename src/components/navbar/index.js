import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Menu() {
  return (
    <>
      <h2 align="center">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/hobbies"> Hobbies </NavLink>
        <NavLink to="/galeria"> Galeria </NavLink>
        <NavLink to="/contato"> Contato </NavLink>
      </h2>
    </>
  );
}
