import { connect } from "react-redux";
import { getDataForfoodAPi } from "../../api/api";
import CardFoodList from "./card.js"
import React, { Component } from "react";
import "./Home.css";

import Homeimg1 from "./img/FirstSectionHome.jpg";
import Homeimg2 from "./img/SecondSectionHome.jpg";
import ModalExampleDimmer from "./Modal";
import Addfood from "../layoutadmin/Addfile";
class Home extends Component {
  componentDidMount() {
    this.props.getDataForfood();
    
    
  }
  render() {
    
    const { foods } = this.props;
    console.log(foods)
    return (
      <div>
        <div className="cover-home">
          <h1 class="cover-title-home ">Lorem Ipsum</h1>
        </div>

        <div className=" first-section-home ">
          <img className="Home-img1" src={Homeimg1} alt="img1" />
          <div>
            <p className="Home-paragraphe1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lectus tellus, varius eu orci id, porttitor vulputate sem. Fusce
              sapien quam, dignissim sed rhoncus commodo, porttitor non ex.
              Vestibulum augue eros, hendrerit ut vulputate quis, hendrerit et
              tellus. Quisque quis mi lacus.{" "}
            </p>
            <ModalExampleDimmer
               SampleFood={
                <div class="burger-sampleHome">
                  {foods.filter(el=>el.type==="burger").map((el) => (
                    <CardFoodList food={el}  loadLayout={this.props.loadLayout}/>
                  ))}
                </div>
              }
            />
          </div>
        </div>
        <div className="second-section-home">
          <p className="Home-paragraphe2">
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
                    <CardFoodList food={el}  loadLayout={this.props.loadLayout}/>
                  ))}
                </div>
              }
            />
          <img className="Home-img2" src={Homeimg2} alt="img1" />
        </div>
        {(this.props.loadLayout===3)?<Addfood />:null}
      </div>

    );
  }
}
const mapStateToProps = (state) => ({
  
   foods: state.foods,
   
});
const mapDispatchToProps = (dispatch) => ({
  getDataForfood: () => dispatch(getDataForfoodAPi()),
  
 
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
