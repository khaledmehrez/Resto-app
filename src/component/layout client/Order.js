import React, { Component } from 'react';
import { connect } from "react-redux";
import { getOrderAPi, } from "../../api/api";
import Ordercard from './Ordercard';
class Order extends Component {
    componentDidMount(){
        this.props.getOrder();
    }
    render() {
        const {getorders}=this.props;
        
        
        return (
            <div>
                {getorders.map(el=><Ordercard orderfood={el} />)}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    
    getorders:state.getorders,
  
    
  });
  const mapDispatchToProps = (dispatch) => ({
   
    getOrder: () => dispatch(getOrderAPi()),
    
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Order);