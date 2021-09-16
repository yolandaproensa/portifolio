import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Contato from "./Contato";
import Galeria from "./Galeria";
import Hobbies from "./Hobbies";
import Home from "./Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/hobbies" component={Hobbies}></Route>
        <Route path="/galeria" component={Galeria}></Route>
        <Route path="/contato" component={Contato}></Route>
      </Switch>
    </BrowserRouter>
  );
}
