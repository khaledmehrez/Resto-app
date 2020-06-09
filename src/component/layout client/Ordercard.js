import React, { Component } from "react";
import { connect } from "react-redux";
import {deleteOrderAPi,editOrderAPi} from "../../action";
class Ordercard extends Component {
    state={isEdit:false}
    deleteOrder=(i)=>{
       this.props.deleteorder(i)
       window.location.reload();
    }
    editOrder=(i)=>{
        this.props.editorder(i)
        console.log(i)
        this.setState({isEdit:true})
    }
  render() {
      const orderfood=this.props.orderfood
    return (
      <div>
        <div class="ui card">
          <div class="image">
          <img src={require(`${orderfood.picture}`)}/>
          </div>
          <div class="content">
            <div class="header">{orderfood.name}</div>
            <div class="meta">
              <span class="date">Joined in 2015</span>
            </div>
            <div class="description">
              Matthew is a musician living in Nashville.
            </div>
          </div>
          <div class="extra content">
          <button class="ui red inverted button" onClick={() => this.deleteOrder(orderfood.id)}>X</button>
          <button class="ui green inverted button" onClick={() => this.editOrder(orderfood.id)}>Edit</button>

          {(this.state.isEdit)?<div class="ui input"><input type="text" placeholder="Search..." />
          <button class="ui green inverted button" >Green</button></div>:null}
          
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    deleteorder:(orderTOdelete)=>dispatch(deleteOrderAPi(orderTOdelete)),
    editorder:(orderTOedit)=>dispatch(editOrderAPi(orderTOedit)),

});
export default connect(mapStateToProps, mapDispatchToProps)(Ordercard);
