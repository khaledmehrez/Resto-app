import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addOrderAPi,
  deletefoodAPi,
  EDitOrderQte,
  ShowAndHideApi,editnameApi,editpriceApi
} from "../../api/api";
import { getorder } from "../../action";
import { Link } from "react-router-dom";

class CardFoodList extends Component {
  state = { togle: this.props.food.etat, editprice: false,price:"",editname:false,name:"",namefromApi:this.props.food.name,pricefromApi:this.props.food.price };
  AddToOrder = (i) => {
    this.props.addOrder(this.props.food);
  };
  EditfoodList = (i) => {
    console.log(i);
    window.location.reload();
  };

  EditQte = (id) => {
    this.props.ShowandHide(id, true);

    this.setState({ togle: true });
  };
  DeleteFoodList = (i) => {
    this.props.deletefood(i);
    window.location.reload();
  };
  //edit price
  togglepriceTotrue = () => {
    this.setState({ editprice: true });
  };
  
  togglepriceTofalse = (id) => {
    this.props.editPrice(id,this.state.price)
    this.setState({ editprice: false });
    this.setState({pricefromApi:this.state.price})
  };
  handlechangeprice=(e)=>{
    this.setState({price:e.target.value})
  }
  //edit name
  handlechangename=(e)=>{
    this.setState({name:e.target.value})
  }
  togglenameTotrue = () => {
    this.setState({ editname: true });
  };
  togglenameTofalse = (id) => {
  this.props.editName(id,this.state.name)
    this.setState({ editname: false });
    this.setState({namefromApi:this.state.name})
  };


  render() {
    const { food, getorder,usersession } = this.props;
    console.log(this.props.loadLayout)
    return (
      <div>
        <div class="ui card">
          <div class="image">
            <img src={food.picture} />
          </div>
          <div class="content">
            <div class="header">
              {(this.props.loadLayout===3)?(this.state.editname===false )?(
                <span>
                 {this.state.namefromApi}
                 <button
                    class="ui icon button"
                    onClick={this.togglenameTotrue}
                  >
                    <i aria-hidden="true" class="edit icon"></i>
                  </button>
                </span>)
                :
                (<div class="ui icon input">
                  <input
                    type="text"

                    placeholder={this.state.namefromApi}
                    
                    onChange={this.handlechangename}
                  />
                  <button
                    class="ui icon button"
                    onClick={()=>this.togglenameTofalse(food.id)}
                  >
                    <i aria-hidden="true" class="edit icon"></i>
                  </button>
                </div>)
               
              :food.name}
              </div>
                
            
            <div class="content">
              {(this.props.loadLayout===3)?(this.state.editprice === false  ) ? (
                <span>
                  Price:{this.state.pricefromApi} dt
                  <button
                    class="ui icon button"
                    onClick={this.togglepriceTotrue}
                  >
                    <i aria-hidden="true" class="edit icon"></i>
                  </button>
                </span>)
               :
                (<div class="ui icon input">
                  <input
                    type="text"

                    placeholder={this.state.pricefromApi}
                    
                    onChange={this.handlechangeprice}
                  />
                  <button
                    class="ui icon button"
                    onClick={()=>this.togglepriceTofalse(food.id)}
                  >
                    <i aria-hidden="true" class="edit icon"></i>
                  </button>
                </div>
                
              ):<p>{food.price} dt</p> }
            </div>
          </div>
          <div class="extra content">
            {this.props.loadLayout === 2 && this.state.togle === false ? (
              <button
                class="ui green basic button"
                onClick={() => {
                  this.AddToOrder(food.id);
                  this.EditQte(food.id);
                }}
              >
                add to cart
              </button>
            ) : null}
            {this.props.loadLayout === 2 && this.state.togle === true ? (
              <Link to="/order" class="ui green basic button">
                <i aria-hidden="true" class="cart icon"></i>
                go to cart
              </Link>
            ) : null}
            {this.props.loadLayout === 1 ? (
              <button
                class="ui green basic button"
                onClick={() => this.EditfoodList(food.id)}
              >
                edit
              </button>
            ) : null}
            {this.props.loadLayout === 3 ? (
              <button
                class="ui red basic button"
                onClick={() => this.DeleteFoodList(food.id)}
              >
                X
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  addOrder: (order) => dispatch(addOrderAPi(order)),
  deletefood: (foodTOdelete) => dispatch(deletefoodAPi(foodTOdelete)),
  editqte: () => dispatch(EDitOrderQte()),
  ShowandHide: (i, data) => dispatch(ShowAndHideApi(i, data)),
  editName:(i,data)=> dispatch(editnameApi(i,data)),
  editPrice:(i,data)=>dispatch(editpriceApi(i,data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CardFoodList);
