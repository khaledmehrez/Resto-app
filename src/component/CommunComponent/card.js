import React, { Component } from "react";
import { connect } from "react-redux";
import { addOrderAPi  } from "../../action";
class CardFoodList extends Component { 

  AddToOrder=(i)=>{
    this.props.addOrder(this.props.food)
  }
  render() {console.log(this.props.food)
    const food=this.props.food
    return (
      <div>
        <div class="ui card">
          <div class="image">
          <img src={require(`${food.picture}`)}/>
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
          {(this.props.loadLayout===2)?<button class="ui green basic button" onClick={() => this.AddToOrder(food.id)}>Green</button>:null}
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
 

});
export default connect(mapStateToProps, mapDispatchToProps)(CardFoodList);

