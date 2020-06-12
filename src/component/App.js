import React from 'react';
import { connect } from "react-redux";
import './App.css';
import AppGuest from './layoutGuest/AppGuest';
import Appclient from './layout client/Appclient';
import Appadmin from './layoutadmin/Appadmin';
import { Component } from 'react';



class App extends Component {
  render(){

    const layouts=2
      
  if(layouts===1){
  return (
    <div className="App">
      <AppGuest loadLayout={layouts} />
      
    </div>
  );
  }
  else if(layouts===2){
    return(
      <div className="Layout-client">
          <Appclient loadLayout={layouts} />
      </div>
    )
  }
  else if(layouts===3){
    return(
      <div className="App">
      
      <Appadmin loadLayout={layouts}/>
    </div>
    )
  }

}
}
const mapStateToProps = (state) => ({
  
    layouts:state.layouts,
    
});
const mapDispatchToProps = (dispatch) => ({
  
  
 
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

