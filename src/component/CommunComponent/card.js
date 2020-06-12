import React, { Component } from "react";
import { connect } from "react-redux";
import { addOrderAPi,deletefoodAPi,EDitOrderQte,ShowAndHideApi  } from "../../api/api";
import { getorder } from "../../action";
import { Link } from "react-router-dom";

class CardFoodList extends Component { 
state={togle:this.props.food.etat,}
  AddToOrder=(i)=>{
    this.props.addOrder(this.props.food)
  }
  EditfoodList=(i)=>{
    console.log(i)
    window.location.reload();
  }
  
  EditQte=(id)=>{
    
    this.props.ShowandHide(id,true)
    
    this.setState({togle:true})
    
    
    
  }
  DeleteFoodList=(i)=>{
    this.props.deletefood(i)
    window.location.reload();
  }
  render() {
    const {food,getorder}=this.props;
    console.log(getorder)
    
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
              Price:{food.price}
              
            </div>
          </div>
          <div class="extra content">
            
          {(this.props.loadLayout===2 && this.state.togle===false )?<button class="ui green basic button" onClick={() => {this.AddToOrder(food.id) ;this.EditQte(food.id)}} >add to cart</button>:null}
          {(this.props.loadLayout===2 && this.state.togle===true  )?<Link to="/order" class="ui green basic button"  >go to cart</Link>:null}
          {(this.props.loadLayout===3)?<button class="ui green basic button" onClick={() => this.EditfoodList(food.id)}>edit</button>:null}
          {(this.props.loadLayout===3)?<button class="ui red basic button" onClick={() => this.DeleteFoodList(food.id)}>X</button>:null}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  
  
  
  
});
const mapDispatchToProps = (dispatch) => ({
 addOrder: (order) => dispatch(addOrderAPi(order)),
 deletefood:(foodTOdelete)=>dispatch(deletefoodAPi(foodTOdelete)),
 editqte:()=>dispatch(EDitOrderQte()),
ShowandHide:(i,data)=>dispatch(ShowAndHideApi(i,data))
 

});
export default connect(mapStateToProps, mapDispatchToProps)(CardFoodList);

