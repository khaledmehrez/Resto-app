import React, { Component } from 'react';
import { connect } from "react-redux";
import { getOrderAPi,getUsersessionAPi } from "../../api/api";
import Ordercard from './Ordercard';
import "./Order.css"
import Checkout from './Checkout';
class Order extends Component {
    componentDidMount(){
        this.props.getOrder();
        
    }
    render() {
        const {getorders,usersession}=this.props;
        
        
        
        
        return (
            <div>
                <Checkout />
                <div class="order-contain">
                {getorders.map(el=><Ordercard orderfood={el} />)}
            </div>
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
  export default connect(mapStateToProps, mapDispatchToProps)(Order);