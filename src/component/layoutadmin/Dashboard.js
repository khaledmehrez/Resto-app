import React, { Component } from "react";
import { connect } from "react-redux";
import { getOrderAPi } from "../../api/api";
import Order from "../layout client/Order";
import Modalorder from "./Modalorder";
class Dashboard extends Component {
  state={validation:false}
  componentDidMount() {
    this.props.getOrder();
  }
  validate=()=>{
    this.setState({validation:true})
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
                <div class="ui ribbon label">user</div>
              </td>
              <td class="">
                <Modalorder />
              </td>
              <td class="">
                {" "}
                {(this.state.validation===false)?<button class="ui red basic button" onClick={this.validate}>Not validate</button>: <button class="ui green basic button">validate</button>}
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
