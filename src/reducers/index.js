import { combineReducers } from "redux";

const initialstate=[]
//reducer to get food data
const foodList=(state=initialstate,action)=>{
  
    if(action.type==="food"){
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
  
  getorders:getOrderList,
  
});
