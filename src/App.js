import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoute from './route/AppRoute'
function App() {
  return (
    <div>
      <BrowserRouter>
      <AppRoute/>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
