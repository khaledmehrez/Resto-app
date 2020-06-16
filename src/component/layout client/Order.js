import React, { Component } from 'react';
import { connect } from "react-redux";
import { getOrderAPi,getUsersessionAPi } from "../../api/api";
import Ordercard from './Ordercard';
import "./Order.css"
import Checkout from './Checkout';
class Order extends Component {
    
    componentDidMount(){
        this.props.getOrder();
        this.props.getusersession();
        
    }
    render() {
        const {getorders,usersession}=this.props;
        let a=usersession
        let b=a.map(el=>el.acompte).join("")
        
        
        
        return (
            <div>
                <Checkout />
                <div class="order-contain">
                {getorders.filter(el=>el[b]===b).map(el=><Ordercard orderfood={el} b={b} />)}
            </div>
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
    getusersession:()=>dispatch(getUsersessionAPi())
    
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Order);