import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import logo from "../igLogo.png";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Innovations from "./components/Innovations";
import Default from "./components/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/innovations" component={Innovations} />

          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
