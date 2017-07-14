import React from 'react';
import {render} from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './containers/Home';
import Lesson from './containers/Lesson';
import Profile from './containers/Profile';
import App from './containers/App';
render(<Router>
  <App>
    <Switch>
      <Route path='/home' component={Home}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/Lesson' component={Lesson}/>
      <Redirect to="/home"/>
    </Switch>
  </App>
</Router>, document.querySelector('#root'));