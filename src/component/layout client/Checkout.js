import React, { Component } from "react";
import { connect } from "react-redux";
import { getOrderAPi,getUsersessionAPi } from "../../api/api";
import Modalcheckout from "./Modalcheckout";
class Checkout extends Component {

    componentDidMount(){
        this.props.getOrder();
        this.props.getusersession();
        
       
        
    }
    openmodal=()=>{

    }
    
  render() { 
    let a=this.props.usersession
        let b=a.map(el=>el.acompte).join("")
        
    const arrPrice=this.props.getorders.filter(el=>el[b+"qte"]).map(el=>el.price*el[b+"qte"])
    console.log(arrPrice)
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
    usersession:state.usersession,
    
  });
  const mapDispatchToProps = (dispatch) => ({
   
    getOrder: (orderuser) => dispatch(getOrderAPi(orderuser)),
    getusersession:()=>dispatch(getUsersessionAPi()),
    
    
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

