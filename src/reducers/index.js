import { combineReducers } from "redux";

const initialstate=[]

const foodList=(state=initialstate,action)=>{
    if(action.type==="api"){
return action.payload
    }
    else return state
}






export default combineReducers({
  food:foodList
});
