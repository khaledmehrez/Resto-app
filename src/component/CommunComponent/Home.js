import { connect } from "react-redux";
import { getDataForGuestAPi } from "../../action";

import React, { Component } from "react";
import "./Home.css";

import Homeimg1 from "./img/FirstSectionHome.jpg";
import Homeimg2 from "./img/SecondSectionHome.jpg";
import ModalExampleDimmer from "./Modal";
class Home extends Component {
  componentDidMount() {
    this.props.getDataForGuest();
  }
  render() {
    const { food } = this.props;
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
                <div>
                  {food.map((el) => (
                    <img src={require(`${el.burger}`)} />
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
                <div>
                  {food.map((el) => (
                    <img src={require(`${el.pizza}`)} />
                  ))}
                </div>
              }
            />
          <img className="Home-img2" src={Homeimg2} alt="img1" />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return { food: state.food };
};
const mapDispatchToProps = (dispatch) => ({
  getDataForGuest: () => dispatch(getDataForGuestAPi()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
