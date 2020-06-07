import Axios from 'axios'

//ACTION TO GET THE API

export const getDataForGuest = (payload) => {
  return {
    type: "api",
    payload:payload
  };
};

export function getDataForGuestAPi(){
  return(dispatch)=>
  Axios.get('http://localhost:4000/posts').then((res)=>dispatch(getDataForGuest(res.data)))
}