import React, { Component } from "react";
import { connect } from "react-redux";
import {deleteOrderAPi,removeItemQteApi,addItemQteApi,ShowAndHideApi} from "../../api/api";
class Ordercard extends Component {
    
    deleteOrder=(i)=>{
       this.props.deleteorder(i)
       window.location.reload();
       this.props.showBtn(i,false)
    }
    editOrder=(i)=>{
        this.props.editorder(i)
        console.log(i)
        this.setState({isEdit:true})
    }
    removeqte=(i)=>{
     if(this.props.orderfood.qte>1){
      this.props.removeqte(i,this.props.orderfood.qte-1)
      window.location.reload()
     }
      


    }
    addqte=(i)=>{

      this.props.removeqte(i,this.props.orderfood.qte+1)
      window.location.reload()
    }
  render() {
      const orderfood=this.props.orderfood
      
    return (
      <div>
        <div class="ui card">
          <div class="image">
          <img src={orderfood.picture}/>
          </div>
          <div class="content">
            <div class="header">{orderfood.name}</div>
            <div class="meta">
              <span class="date">Joined in 2015</span>
            </div>
            <div class="description">
              price: {orderfood.price} dt
            </div>
          </div>
          <div class="extra content">
          <button class="ui red inverted button" onClick={() => this.deleteOrder(orderfood.id)}>X</button>
          <button class="ui green inverted button" onClick={() => this.editOrder(orderfood.id)}>Edit</button>

          
          
          </div>
          <div class="extra content">
          <button class="ui  icon button" onClick={()=>this.removeqte(orderfood.id)}>-</button>
          <div class="ui mini input"><input type="text"  value={orderfood.qte} /></div>
          <button class="ui icon button" onClick={()=>this.addqte(orderfood.id)} >+</button>
          </div>
        <div className=" content">
          coast:{orderfood.price*orderfood.qte} dt
        </div>

        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    deleteorder:(orderTOdelete)=>dispatch(deleteOrderAPi(orderTOdelete)),
    removeqte:(i,x)=>dispatch(removeItemQteApi(i,x)),
    additem: (i,x)=>dispatch(addItemQteApi(i,x)),
    showBtn:(i,data)=>dispatch(ShowAndHideApi(i,data))
    

});
export default connect(mapStateToProps, mapDispatchToProps)(Ordercard);
