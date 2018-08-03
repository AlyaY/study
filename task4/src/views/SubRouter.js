import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Counter from '../pages/Counter';
import About from '../pages/About';
import Login from '../pages/Login';
import LoginRedux from '../pages/LoginRedux';
import Success from '../pages/LoginRedux/pages/Success';
import LoginReduxForm from '../pages/LoginReduxForm';

const SubRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/study' />
        <Route path='/study/counters' component={Counter} />
        <Route path='/study/about' component={About} />
        <Route path='/study/login' component={Login} />
        <Route path='/study/login-redux/success' component={Success} />
        <Route path='/study/login-redux' component={LoginRedux} />
        <Route path='/study/login-redux-form' component={LoginReduxForm} />
        <Redirect from='*' to='/study/404' />
      </Switch>
    </div>
  )
}

export default SubRouter;
