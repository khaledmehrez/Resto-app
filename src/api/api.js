import axios from 'axios'
import {getDataForfood,getorder,changelayout,getuser,getusersession} from "../action"
//get foodlist from api

export function getDataForfoodAPi(){
    return(dispatch)=>
    axios.get('http://localhost:4000/foods').then((res)=>dispatch(getDataForfood(res.data)));
  }
  //post the order to api
  export function addOrderAPi(order,index){
    const userqte=order+"qte"
    const userattribue=order
    return(dispatch)=>
    axios.patch(`http://localhost:4000/orders/${index}`,{[userattribue]:order,[userqte]:1}).then((res)=>(console.log(res.data)))
  }
  //fetch order from api
  export function getOrderAPi(){
    return(dispatch)=>
    axios.get('http://localhost:4000/orders').then((res)=>dispatch(getorder(res.data)));
    }
//edit order
export function EDitOrderQte(OrderQteToEdit){
  
  return(dispatch)=>
  axios.patch(`http://localhost:4000/orders/${OrderQteToEdit}`).then((res)=>(console.log(res.data)))
}

//delete order


export function deleteOrderAPi(orderTOdelete,key){
  const dv=[key].join("")
  const empty=""
  return(dispatch)=>
  axios.patch(`http://localhost:4000/orders/${orderTOdelete}`,{[dv]:empty}).then((res)=>(console.log(res.data)))
}


//remove item qte
export function removeItemQteApi(i,data,dynamicvariable){
  const dv=[dynamicvariable+"qte"].join("")
  console.log(dv)
  return(dispatch)=>
  axios.patch(`http://localhost:4000/orders/${i}`,{[dv]:data}).then((res)=>(console.log(res.data)))
}
//add itemqte
export function addItemQteApi(i,data){
  
  return(dispatch)=>
  axios.patch(`http://localhost:4000/orders/${i}`,{qte:data}).then((res)=>(console.log(res.data)))
}
// show and hide add to cart and go to cart
export function ShowAndHideApi(i,data){
  
  return(dispatch)=>
  axios.patch(`http://localhost:4000/FOODS/${i}`,{etat:data}).then((res)=>(console.log(res.data)))
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
  axios.post('http://localhost:4000/foods',{name:thefood.name,picture:thefood.picture,price:thefood.price,type:thefood.type,qte:0,etat:false}).then((res)=>(console.log(res.data)))
}
//edit food list
//edit name
export function editnameApi(i,data){
  
  return(dispatch)=>
  axios.patch(`http://localhost:4000/foods/${i}`,{name:data}).then((res)=>(console.log(res.data)))
}
//edit price
export function editpriceApi(i,data){
  
  return(dispatch)=>
  axios.patch(`http://localhost:4000/foods/${i}`,{price:data}).then((res)=>(console.log(res.data)))
}
//layout
//get layout api

export function getlayoutAPi(){
  return(dispatch)=>
  axios.get('http://localhost:4000/layout').then((res)=>dispatch(changelayout(res.data)));
  }

  //choose layout

  export function chooseLayoutApi(data){
  
    return(dispatch)=>
    axios.patch(`http://localhost:4000/layout`,{layoutnumber:data}).then((res)=>(console.log(res.data)))
  }
  //users
  // get users
  export function getUserAPi(){
    return(dispatch)=>
    axios.get('http://localhost:4000/users').then((res)=>dispatch(getuser(res.data)));
    }
    //put user session
    export function addSessionToApi(data){
  
      return(dispatch)=>
      axios.put('http://localhost:4000/curentsessions/1',data).then((res)=>(console.log(res.data)))
    }
    //get user session
    export function getUsersessionAPi(){
      return(dispatch)=>
      axios.get(`http://localhost:4000/curentsessions`).then((res)=>dispatch(getusersession(res.data)));
      }
    
 