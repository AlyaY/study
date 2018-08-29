import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import NotFound from '../pages/NotFound';
import Header from '../../modules/Header';
import SubRouter from './SubRouter';

const Router = () => {
  return (
    <div>
        <Switch>
            {/* <Route path='/study/404' component={NotFound} /> */}
            <Route>
                <div>
                    <Header />
                    <SubRouter />
                </div>
            </Route>
        </Switch>
    </div>
  )
}

export default Router;
