import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

import Menu from './pages/Menu/Menu'
import Game from './pages/Game/Game'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/options" component={Options}/> */}
          <Route path="/game" component={Game}/>
          <Route path="/menu" component={Menu}/>
          <Redirect from="" to="menu"/>
          <Redirect from="/" to="menu"/>
        </Switch>
      </BrowserRouter>
    </div>
  );  
}

export default App;
