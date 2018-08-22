import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../../pages/Login';
import Films from '../../pages/Films';
// import Success from '../pages/LoginRedux/pages/Success';

const SubRouter = () => {
  return (
    <div>
      <Switch>
        {/* <Route exact path='/study' /> */}
        <Route path='/study/login' component={Login} />
        <Route path='/study/films' component={Films} />
        {/* <Route path='/study/login/success' component={Success} />
        <Redirect from='*' to='/study/404' /> */}
      </Switch>
    </div>
  )
}

export default SubRouter;
