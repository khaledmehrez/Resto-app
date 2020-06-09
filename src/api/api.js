import axios from 'axios'
import {getDataForfood,getorder} from "../action"
//get foodlist from api

export function getDataForfoodAPi(){
    return(dispatch)=>
    axios.get('http://localhost:4000/foods').then((res)=>dispatch(getDataForfood(res.data)));
  }
  //post the order to api
  export function addOrderAPi(order){
    const p=order.picture
    const t=order.type
    const n=order.name
    return(dispatch)=>
    axios.post('http://localhost:4000/orders',{picture:p,type:t,name:n}).then((res)=>(console.log(res.data)))
  }
  //fet order frrom api
  export function getOrderAPi(){
    return(dispatch)=>
    axios.get('http://localhost:4000/orders').then((res)=>dispatch(getorder(res.data)));
    }


//delete order


export function deleteOrderAPi(orderTOdelete){
  
  return(dispatch)=>
  axios.delete(`http://localhost:4000/orders/${orderTOdelete}`).then((res)=>(console.log(res.data)))
}
//admin
//delete from food list
export function deletefoodAPi(foodTOdelete){
  
  return(dispatch)=>
  axios.delete(`http://localhost:4000/foods/${foodTOdelete}`).then((res)=>(console.log(res.data)))
}
//add to foodlist
export function addfoodlistAPi(thefood){
  
  return(dispatch)=>
  axios.post('http://localhost:4000/foods',{thefood}).then((res)=>(console.log(res.data)))
}