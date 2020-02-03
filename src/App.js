import React from 'react';
import './App.css';
import Editor from './components/editor';
import { ConnectedRouter } from 'connected-react-router';
import {history} from "./store";
import { Switch, Route } from 'react-router';
import Navbar from "./components/navbar";
import View from "./components/view";


function App() {

  return (
    <main>
      <ConnectedRouter history={history}>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Editor}/>
          <Route path='/view' component={View}/>
        </Switch>
      </ConnectedRouter>
      
    </main>
  );
}

export default App;
