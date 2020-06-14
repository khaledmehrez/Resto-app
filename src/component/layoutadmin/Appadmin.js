import React, { Component } from 'react';
import NavbarGuest from "../CommunComponent/NavbarGuest"
import {navdataLink,navdataSign  } from "./propsadmin"
import { Route, Switch } from "react-router-dom";
import Home from "../CommunComponent/Home";
import Dashboard from './Dashboard';
class Appadmin extends Component {
    render() {
        return (
            <div>
             <NavbarGuest links={navdataLink} loadLayout={this.props.loadLayout} />
             <Switch>
             <Route
            path="/home-user"
            component={() => <Home loadLayout={this.props.loadLayout} />}
          />
            <Route
            path="/dashboard-admin"
            component={() => <Dashboard  />}
          />


             </Switch>
            </div>
        );
    }
}

export default Appadmin;