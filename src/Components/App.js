import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Route exact path='/' component={Home} />
          {/* <Route path='/purchased' component={Purchased} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
