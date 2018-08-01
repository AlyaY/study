import React from 'react'
import style from './styles'

import { withStyles } from '@material-ui/core/styles'

const Success = ({ classes }) => {
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Hey, we’re iTechArt</h2>
      <p className={classes.text}>As a software development company, iTechArt helps VC-backed startups and fast-growing tech companies build successful, scalable products that users love. Our forte is agile dedicated teams of brilliant minds who rock in Web, Mobile, Big Data, QA & Testing, and DevOps</p>
    </div>
  )
}

export default withStyles(style)(Success)
