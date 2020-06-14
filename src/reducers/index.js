import { combineReducers } from "redux";

const initialstate=[]
const load=1
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

// chnage layout
const changeLayoutlist=(state=load,action)=>{
  
  if(action.type==="layout"){
  return action.payload
  }
  else return state
}
//get user
const getUserList=(state=initialstate,action)=>{
  
  if(action.type==="Getuser"){
  return action.payload
  }
  else return state
}
//get user session
const getusersessionList=(state=initialstate,action)=>{
  
  if(action.type==="user-session"){
  return action.payload
  }
  else return state
}

export default combineReducers({
  foods:foodList,
  
  getorders:getOrderList,
  layouts:changeLayoutlist,
  getusers:getUserList,
  usersession:getusersessionList,
});
