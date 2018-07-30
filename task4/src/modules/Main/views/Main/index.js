import React from 'react'
import style from './styles'

import { withStyles } from '@material-ui/core/styles'

import Counter from '../../../Counter'
import About from '../../../About'
import { Switch, Route, Redirect } from 'react-router-dom'

const Main = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path='/' />
        <Route path='/counters' component={Counter} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/404' />
      </Switch>
    </div>
  )
}

export default withStyles(style)(Main)
