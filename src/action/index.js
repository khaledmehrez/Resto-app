import Axios from 'axios'

//ACTION TO GET THE API for burgers

export const getDataForburger = (payload) => ({
  
    type: "Burger",
    payload:payload,
  
});

export function getDataForburgerAPi(){
  return(dispatch)=>
  Axios.get('http://localhost:4000/burgers').then((res)=>dispatch(getDataForburger(res.data)));
}

//Action to get the api for pizza 
export const getDataForpizza = (payload) => {
  return {
    type: "Pizza",
    payload:payload
  };
};

export function getDataForpizzaAPi(){
  return(dispatch)=>
  Axios.get('http://localhost:4000/pizzas').then((res)=>dispatch(getDataForpizza(res.data)))
}
