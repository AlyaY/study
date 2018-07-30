import React from 'react'

import Counter from '../pages/Counter'
import About from '../pages/About'
import { Switch, Route, Redirect } from 'react-router-dom'

const SubRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' />
        <Route path='/counters' component={Counter} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/404' />
      </Switch>
    </div>
  )
}

export default SubRouter
