import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Homepage from './Homepage';
import Profile from './Profile';
import Explore from './Explore';
import Debugging from './Debugging';
import Correct from './Correct';
import Types from './Types';
import Booleans from './Booleans';
import PushPop from './PushPop';
import NotYet from './NotYet';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Login} />
          <Route exact path='/homepage' component={Homepage} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/explore' component={Explore} />
          <Route exact path='/bugs' component={Debugging} />
          <Route exact path='/correct' component={Correct} />
          <Route exact path='/types' component={Types} />
          <Route exact path='/booleans' component={Booleans} />
          <Route exact path='/pushandpop' component={PushPop} />
          <Route exact paht='/notyet' component={NotYet} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
