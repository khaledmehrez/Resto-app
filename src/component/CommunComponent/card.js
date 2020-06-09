import React, { Component } from "react";
import { connect } from "react-redux";
import { addOrderAPi,deletefoodAPi  } from "../../api/api";

class CardFoodList extends Component { 

  AddToOrder=(i)=>{
    this.props.addOrder(this.props.food)
  }
  EditfoodList=(i)=>{
    console.log(i)
    window.location.reload();
  }
  DeleteFoodList=(i)=>{
    this.props.deletefood(i)
    window.location.reload();
  }
  render() {console.log(this.props.food)
    const food=this.props.food
    return (
      <div>
        <div class="ui card">
          <div class="image">
          <img src={food.picture}/>
          </div>
          <div class="content">
            <div class="header">{food.name}</div>
            <div class="meta">
              <span class="date">Joined in 2015</span>
            </div>
            <div class="description">
              Matthew is a musician living in Nashville.
            </div>
          </div>
          <div class="extra content">
          {(this.props.loadLayout===2)?<button class="ui green basic button" onClick={() => this.AddToOrder(food.id)}>add to cart</button>:null}
          {(this.props.loadLayout===3)?<button class="ui green basic button" onClick={() => this.EditfoodList(food.id)}>edit</button>:null}
          {(this.props.loadLayout===3)?<button class="ui red basic button" onClick={() => this.DeleteFoodList(food.id)}>X</button>:null}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  
  foods: state.foods,
  
});
const mapDispatchToProps = (dispatch) => ({
 addOrder: (order) => dispatch(addOrderAPi(order)),
 deletefood:(foodTOdelete)=>dispatch(deletefoodAPi(foodTOdelete)),
 

});
export default connect(mapStateToProps, mapDispatchToProps)(CardFoodList);

