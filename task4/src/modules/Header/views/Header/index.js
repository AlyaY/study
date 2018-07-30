import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import style from './styles'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const Header = ({ routers, handleChange, value, classes }) => {
  const tabs = routers.map(({ path, name }) => (
    <Tab key={path} value={path} label={name} component={Link} to={path} />
  ))

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs value={value} onChange={handleChange}>{tabs}</Tabs>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  routers: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default withStyles(style)(Header)
