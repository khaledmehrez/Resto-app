import React from "react";
import { Link } from "react-router-dom";
export const navdataLink = (
  <>
    <Link  to="/home-user" className="item" >Home </Link>
    <Link to="/order" className="item" >Shop </Link>
    </>
);
export const navdataSign=(
  <div ><button class="ui red inverted button" >Logout</button></div>
)