import React from 'react';

import './App.css';
import AppGuest from './layoutGuest/AppGuest';
import Appclient from './layout client/Appclient';
import Appadmin from './layoutadmin/Appadmin';

const loadLayout=3

function App() {
  if(loadLayout===1){
  return (
    <div className="App">
      <AppGuest />
      
    </div>
  );
  }
  else if(loadLayout===2){
    return(
      <div className="Layout-client">
          <Appclient loadLayout={loadLayout} />
      </div>
    )
  }
  else if(loadLayout===3){
    return(
      <div className="App">
      
      <Appadmin loadLayout={loadLayout}/>
    </div>
    )
  }
}

export default App;
