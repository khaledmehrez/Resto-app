import { combineReducers } from "redux";

const initialstate=[]
//reducer for burger data
const foodList=(state=initialstate,action)=>{
  
    if(action.type==="food"){
    return action.payload
    }
    else return state
}


//reducer for addOrder

const orderList=(state=initialstate,action)=>{
  if(action.type==="Order"){
return action.payload
  }
  else return state
}

//reducer to get order api
const getOrderList=(state=initialstate,action)=>{
  
  if(action.type==="Getorder"){
  return action.payload
  }
  else return state
}



export default combineReducers({
  foods:foodList,
  orders:orderList,
  getorders:getOrderList,
  
});
