import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import style from './styles';

const Header = ({ routers, handleChange, currentRoute, classes }) => {
  const tabs = routers.map(({ path, name }) => (
    <Tab key={path} value={path} label={name} component={Link} to={path} />
  ))

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs value={currentRoute} onChange={handleChange}>{tabs}</Tabs>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  routers: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentRoute: PropTypes.string.isRequired,
}

export default withStyles(style)(Header);
