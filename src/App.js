import React from "react";
import { Article, Brand, Cta, Feature, Navbar } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  Whatmetalbrain,
} from "./containers";

import "./css/App.css";
import "./sass/App.scss";

const App = () => {
  return (
    <div>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <Whatmetalbrain />
        <Feature />
        <Possibility />
        <Cta />
        <Blog />
      </div>
    </div>
  );
};

export default App;
