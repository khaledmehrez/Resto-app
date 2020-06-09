import React, { Component } from "react";
import "./NavbarGuest.css"
class NavbarGuest extends Component {
  render() {
    return (
      <div>
        <div className="ui menu">
          {this.props.links}
          <div className="sign">
            {this.props.sign}
          </div>
          
          
        </div>
      </div>
    );
  }
}

export default NavbarGuest;
