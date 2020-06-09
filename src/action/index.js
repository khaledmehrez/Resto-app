import axios from 'axios'

//ACTION TO GET THE API for burgers

export const getDataForfood = (payload) => ({
  
    type:"food",
    payload:payload,
  
});








//action to get the order from apit
export const getorder = (payload) => ({
  
  type:"Getorder",
  payload:payload,

});




