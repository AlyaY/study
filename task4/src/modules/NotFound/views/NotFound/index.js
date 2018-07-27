import React from 'react'
import style from './styles'

import { withStyles } from '@material-ui/core/styles'

const NotFound = ({ classes }) => {
  return (
    <div className={classes.root}>
      <h2>This page is not found</h2>
    </div>
  )
}

export default withStyles(style)(NotFound)
