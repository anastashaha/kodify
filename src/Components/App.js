import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Levels from './Levels';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Route exact path='/' component={Home} />
          <Route exact path='/levels' component={Levels} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
