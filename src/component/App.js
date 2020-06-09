import React from 'react';

import './App.css';
import AppGuest from './layoutGuest/AppGuest';
import Appclient from './layout client/Appclient';

const loadLayout=2

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
}

export default App;
