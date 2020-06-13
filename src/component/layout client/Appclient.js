import React, { Component } from "react";
import NavbarGuest from "../CommunComponent/NavbarGuest";
import Home from "../CommunComponent/Home";
import { navdataLink, navdataSign } from "./propsClient";
import Order from "./Order";

import { Route, Switch } from "react-router-dom";
class Appclient extends Component {
  render() {
    return (
      <div>
        <NavbarGuest links={navdataLink} loadLayout={this.props.loadLayout} />
        <Switch>
          <Route
            path="/home-user"
            component={() => <Home loadLayout={this.props.loadLayout} />}
          />
          <Route path="/Order" component={Order} />
        </Switch>
      </div>
    );
  }
}

export default Appclient;
