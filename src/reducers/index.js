import { combineReducers } from "redux";

const initialstate=[]
//reducer for burger data
const burgerList=(state=initialstate,action)=>{
  
    if(action.type==="Burger"){
    return action.payload
    }
    else return state
}
// reducer for pizza data
const pizzaList=(state=initialstate,action)=>{
  if(action.type==="Pizza"){
return action.payload
  }
  else return state
}






export default combineReducers({
  burgers:burgerList,
  pizzas:pizzaList
});
