import React from 'react';
import { connect } from "react-redux";
import './App.css';
import AppGuest from './layoutGuest/AppGuest';
import Appclient from './layout client/Appclient';
import Appadmin from './layoutadmin/Appadmin';
import { Component } from 'react';
import {getlayoutAPi} from "../api/api"


class App extends Component {
  
  componentDidMount(){
    this.props.getlayout();
    
  }
  
  render(){
    
    
    const {layouts}=this.props;
    const a=layouts.layoutnumber
  
    
    
    
      
  if(a===1){
    
  return (
    <div className="App">
      
      <AppGuest loadLayout={a} />
      
      
    </div>
  );
  }
  else if(a===2){
    return(
      <div className="Layout-client">
          <Appclient loadLayout={a} />
          
      </div>
    )
  }
  else if(a===3){
    return(
      <div className="App">
      
      <Appadmin loadLayout={a}/>
     
    </div>
    )
  }
  else return <h1>error</h1> 

}
}
const mapStateToProps = (state) => ({
  
    layouts:state.layouts,
    
});
const mapDispatchToProps = (dispatch) => ({
  getlayout:()=>dispatch(getlayoutAPi())
  
 
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

