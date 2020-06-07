import React, { Component } from 'react';
import { getDataForGuestAPi} from "../../action"

import { connect } from 'react-redux'

class FoodList extends Component {
  
  componentDidMount(){
    this.props.getDataForGuest();
  }
    render() {
      const {food} =this.props
      
      console.log(food.burger)
      
     
        return (
            <div>
               {food.map(el=> <img src={require(`${el.burger}`)} />)}
               
            </div>
        );
    }
}
const mapStateToProps=(state)=>{

return {food:state.food}
}
const mapDispatchToProps = (dispatch) =>({
getDataForGuest:()=> dispatch(getDataForGuestAPi())
})
export default connect(mapStateToProps,mapDispatchToProps)(FoodList);