import React, { Component } from "react";
import "./NavbarGuest.css"
import { connect } from "react-redux";
import {chooseLayoutApi} from "../../api/api"
import Addfood from "../layoutadmin/Addfile"
class NavbarGuest extends Component {
  resetLayout=()=>{
    this.props.choose(1)
    window.location.reload()
  }
  render() {
    console.log(this.props.loadLayout)
    return (
      <div>
        <div className="ui menu">
          {this.props.links}
          <div className="sign">
            {this.props.sign}
            {(this.props.loadLayout===3)?<Addfood />:null}
            {(this.props.loadLayout>1)?<button
            class="ui red inverted button"
            onClick={this.resetLayout}
          >
            Logout
          </button>:null}
          </div>
          
          
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    
    choose:(data)=> dispatch(chooseLayoutApi(data))

});
export default connect(mapStateToProps, mapDispatchToProps)(NavbarGuest);
