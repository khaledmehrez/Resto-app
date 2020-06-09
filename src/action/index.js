import axios from 'axios'

//ACTION TO GET THE API for burgers

export const getDataForfood = (payload) => ({
  
    type:"food",
    payload:payload,
  
});

export function getDataForfoodAPi(){
  return(dispatch)=>
  axios.get('http://localhost:4000/foods').then((res)=>dispatch(getDataForfood(res.data)));
}



//Action to post to the order array
export const addOrder = (payload) => {
  return {
    type:"Order",
    payload:payload
  };
};

export function addOrderAPi(order){
  const p=order.picture
  const t=order.type
  const n=order.name
  return(dispatch)=>
  axios.post('http://localhost:4000/orders',{picture:p,type:t,name:n}).then((res)=>dispatch(addOrder(res.data)))
}

//action to get the order
export const getorder = (payload) => ({
  
  type:"Getorder",
  payload:payload,

});

export function getOrderAPi(){
return(dispatch)=>
axios.get('http://localhost:4000/orders').then((res)=>dispatch(getorder(res.data)));
}

//delete order
export const deleteOrder = (payload) => {
  return {
    type:"deleteOrder",
    payload:payload
  };
};

export function deleteOrderAPi(orderTOdelete){
  
  return(dispatch)=>
  axios.delete(`http://localhost:4000/orders/${orderTOdelete}`).then((res)=>dispatch(deleteOrder(res.data)))
}
//edit order
export const editOrder = (payload) => {
  return {
    type:"deleteOrder",
    payload:payload
  };
};

export function editOrderAPi(orderTOedit){
  
  
  return(dispatch)=>
  axios.put(`http://localhost:4000/orders/${orderTOedit}`).then((res)=>dispatch(editOrder(res.data)))
}

