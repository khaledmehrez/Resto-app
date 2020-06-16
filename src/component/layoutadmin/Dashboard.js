import React, { Component } from "react";
import { connect } from "react-redux";
import { getOrderAPi } from "../../api/api";
import Order from "../layout client/Order";
import Modalorder from "./Modalorder";

class Dashboard extends Component {
  state={validation1:false,validation2:false,validation3:false,validation4:false,validation5:false}
  componentDidMount() {
    this.props.getOrder();
  }
  validate1=()=>{
    this.setState({validation1:true})
  }
  validate2=()=>{
    this.setState({validation2:true})
  }
  validate3=()=>{
    this.setState({validation3:true})
  }
  validate4=()=>{
    this.setState({validation4:true})
  }
  render() {
    return (
      <div>
        <table class="ui celled table">
          <thead class="">
            <tr class="">
              <th class="">user</th>
              <th class="">order</th>
              <th class="">validation</th>
            </tr>
          </thead>
          <tbody class="">
            <tr class="">
              <td class="">
                <div class="ui ribbon label">user1</div>
              </td>
              <td class="">
                <Modalorder getorders={this.props.getorders} b={"user1"}/>
              </td>
              <td class="">
                {" "}
                {(this.state.validation1===false)?<button class="ui red basic button" onClick={this.validate1}>Not validate</button>: <button class="ui green basic button">validate</button>}
              </td>
            </tr>
            <tr class="">
              <td class="">
                <div class="ui ribbon label">user2</div>
              </td>
              <td class="">
                <Modalorder getorders={this.props.getorders} b={"user2"}/>
              </td>
              <td class="">
                {" "}
                {(this.state.validation2===false)?<button class="ui red basic button" onClick={this.validate2}>Not validate</button>: <button class="ui green basic button">validate</button>}
              </td>
            </tr>
            <tr class="">
              <td class="">
                <div class="ui ribbon label">user3</div>
              </td>
              <td class="">
                <Modalorder getorders={this.props.getorders} b={"user3"}/>
              </td>
              <td class="">
                {" "}
                {(this.state.validation3===false)?<button class="ui red basic button" onClick={this.validate3}>Not validate</button>: <button class="ui green basic button">validate</button>}
              </td>
            </tr>
            <tr class="">
              <td class="">
                <div class="ui ribbon label">user4</div>
              </td>
              <td class="">
                <Modalorder getorders={this.props.getorders} b={"user4"}/>
              </td>
              <td class="">
                {" "}
                {(this.state.validation4===false)?<button class="ui red basic button" onClick={this.validate4}>Not validate</button>: <button class="ui green basic button">validate</button>}
              </td>
            </tr>
          </tbody>
          <tfoot class="">
            <tr class="">
              <th colspan="3" class="">
                <div class="ui pagination right floated menu">
                  <a class="icon item">
                    <i aria-hidden="true" class="chevron left icon"></i>
                  </a>
                  <a class="item">1</a>
                  <a class="item">2</a>
                  <a class="item">3</a>
                  <a class="item">4</a>
                  <a class="icon item">
                    <i aria-hidden="true" class="chevron right icon"></i>
                  </a>
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  getorders: state.getorders,
});
const mapDispatchToProps = (dispatch) => ({
  getOrder: (orderuser) => dispatch(getOrderAPi(orderuser)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
