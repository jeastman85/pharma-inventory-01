import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";

import Home from "./Pages/HomePage";
import Order from "./Pages/OrderPage";
import Admin from "./Pages/AdminPage";
import Default from "./Pages/Default";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/order" component={Order} />
          <Route path="/admin" component={Admin} />
          <Route component={Default} />
        </Switch>
      </>
    );
  }
}

export default App;
