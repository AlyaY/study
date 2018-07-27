import React from 'react'
import style from './styles'

import { withStyles } from '@material-ui/core/styles'

const About = ({ classes }) => {
  return (
    <div className={classes.root}>
      <h2>About us info</h2>
      <p>знакомство с библиотекой react-router-dom</p>
    </div>
  )
}

export default withStyles(style)(About)
