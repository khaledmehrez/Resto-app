import React, { Component } from "react";
import { connect } from "react-redux";
import { getOrderAPi } from "../../api/api";
import Modalcheckout from "./Modalcheckout";
class Checkout extends Component {

    componentDidMount(){
        this.props.getOrder();
       
        
       
        
    }
    openmodal=()=>{

    }
    
  render() { 
   
    const arrPrice=this.props.getorders.map(el=>el.price*el.qte)
        let s=0
         for(let i=0;i<arrPrice.length;i++){
          s=s+arrPrice[i]
          
        }
        console.log(s)
    
      
    return (
      <div class="ui left action input">
        <Modalcheckout class="ui teal icon left labeled button" >
          
          
        </Modalcheckout>
        <input type="text" placeholder="Search..." value={s}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
    
    getorders:state.getorders,
    
    
  });
  const mapDispatchToProps = (dispatch) => ({
   
    getOrder: (orderuser) => dispatch(getOrderAPi(orderuser)),
    
    
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

