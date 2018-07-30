import React from 'react'

import NotFound from '../pages/NotFound'
import Header from '../modules/Header'
import SubRouter from './SubRouter'
import { Switch, Route } from 'react-router-dom'

const Router = () => {
  return (
    <div>
      <Switch>
        <Route path='/study/404' component={NotFound} />
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

export default Router
