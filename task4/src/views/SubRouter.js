import React from 'react'

import Counter from '../pages/Counter'
import About from '../pages/About'
import { Switch, Route, Redirect } from 'react-router-dom'

const SubRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/study' />
        <Route path='/study/counters' component={Counter} />
        <Route path='/study/about' component={About} />
        <Redirect from='*' to='/study/404' />
      </Switch>
    </div>
  )
}

export default SubRouter
