import React from 'react'
import style from './styles'

import { withStyles } from '@material-ui/core/styles'

import NotFound from '../../../NotFound'
import Header from '../../../Header'
import Main from '../../../Main'
import { Switch, Route } from 'react-router-dom'

const PageManager = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Switch>
        <Route path='/404' component={NotFound} />
        <Route>
          <div>
            <Header />
            <Main />
          </div>
        </Route>
      </Switch>
    </div>
  )
}

export default withStyles(style)(PageManager)
