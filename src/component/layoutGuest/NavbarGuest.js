import React, { Component } from "react";
import "./NavbarGuest.css"
class NavbarGuest extends Component {
  render() {
    return (
      <div>
        <div className="ui menu">
          <a href="a" className="item" >Home</a>
          <a href="a" className="item" href="">Food-List</a>
          <a href="a" className="item" href="">Upcoming Events</a>
        </div>
      </div>
    );
  }
}

export default NavbarGuest;
