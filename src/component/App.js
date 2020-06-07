import React from 'react';

import './App.css';
import AppGuest from './layoutGuest/AppGuest';

const loadLayout=1

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

      </div>
    )
  }
}

export default App;
