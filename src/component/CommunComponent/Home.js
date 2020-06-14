import { connect } from "react-redux";
import { getDataForfoodAPi,getOrderAPi,getUsersessionAPi } from "../../api/api";
import CardFoodList from "./card.js"
import React, { Component } from "react";
import "./Home.css";

import Homeimg1 from "./img/FirstSectionHome.jpg";
import Homeimg2 from "./img/SecondSectionHome.jpg";
import Homeimg3 from "./img/homepage3.jpg";
import Homeimg4 from "./img/homepage4.jpg";
import Homeimg5 from "./img/homepage5.jpg";
import Homeimg6 from "./img/homepage6.jpg";
import ModalExampleDimmer from "./Modal";
import Addfood from "../layoutadmin/Addfile";
class Home extends Component {
  componentDidMount() {
    this.props.getDataForfood();
    this.props.getdataorder();
    this.props.getusersession();
    
  }
  render() {
    
    const { foods,getorders,usersession } = this.props;
    
   
    return (
      <div>
        <div className="cover-home">
          <h1 class="cover-title-home ">Lorem Ipsum</h1>
        </div>

        <div className=" first-section-home ">
        <div class="ui fade reveal">
        <div class="ui visible content">
          <img className="Home-img1" src={Homeimg4} alt="img1"  />
          </div>
          <div class="ui hidden content">
    <img src={Homeimg3}   />
  </div>
</div>
          <div className="Home-paragraphe1">
            <p >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lectus tellus, varius eu orci id, porttitor vulputate sem. Fusce
              sapien quam, dignissim sed rhoncus commodo, porttitor non ex.
              Vestibulum augue eros, hendrerit ut vulputate quis, hendrerit et
              tellus. Quisque quis mi lacus.{" "}
            </p>
            <ModalExampleDimmer
               SampleFood={
                <div class="burger-sampleHome">
                  {foods.filter(el=>el.type==="burger").map((el,i) => (
                    <CardFoodList food={el} getorder={getorders} usersession={usersession}  loadLayout={this.props.loadLayout}/>
                  ))}
                </div>
              }
            />
          </div>
        </div>
        <div className="second-section-home">
          <div className="Home-paragraphe2">
          <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lectus tellus, varius eu orci id, porttitor vulputate sem. Fusce
            sapien quam, dignissim sed rhoncus commodo, porttitor non ex.
            Vestibulum augue eros, hendrerit ut vulputate quis, hendrerit et
            tellus. Quisque quis mi lacus.{" "}
          </p>
          <ModalExampleDimmer
              SampleFood={
                <div class="pizza-sampleHome">
                  {foods.filter(el=>el.type==="pizza").map((el) => (
                    <CardFoodList food={el} usersession={usersession} loadLayout={this.props.loadLayout}/>
                  ))}
                </div>
              }
            />
            </div>
            <div class="ui fade reveal">
            <div class="ui visible content">
          <img className="Home-img2" src={Homeimg6} alt="img1" />
          </div>
          <div class="ui hidden content">
    <img src={Homeimg5}   />
  </div>
</div>
        </div>
        
      </div>

    );
  }
}
const mapStateToProps = (state) => ({
  
   foods: state.foods,
   getorders: state.getorders,
   usersession:state.usersession,
   
});
const mapDispatchToProps = (dispatch) => ({
  getDataForfood: () => dispatch(getDataForfoodAPi()),
  getdataorder:()=> dispatch(getOrderAPi()),
 getusersession:()=>dispatch(getUsersessionAPi())
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
