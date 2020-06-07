// import React, { Component } from 'react';
// import { getDataForburgerAPi} from "../../action"

// import { connect } from 'react-redux'

// class FoodList extends Component {
  
//   componentDidMount(){
//     this.props.getDataForburger();
//   }
//     render() {
//       const {food} =this.props
      
//       console.log(food.burger)
      
     
//         return (
//             <div>
//                {food.map(el=> <img src={require(`${el.burger}`)} />)}
               
//             </div>
//         );
//     }
// }
// const mapStateToProps=(state)=>{

// return {food:state.food}
// }
// const mapDispatchToProps = (dispatch) =>({
// getDataForGuest:()=> dispatch(getDataForburgerAPi())
// })
// export default connect(mapStateToProps,mapDispatchToProps)(FoodList);