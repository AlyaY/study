import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Actions from '../Actions';
import Nav from '../Nav';

import style from './styles';

const Header = (props) => {
  const { 
    routers, 
    handleChange, 
    currentRoute, 
    loginRoute, 
    signUpRoute, 
    signOut, 
    isLogin,
    classes
  } = props;
  const navProps = {
    routers,
    handleChange,
    currentRoute
  }
  const actionsProps = {
    loginRoute,
    signUpRoute,
    isLogin,
    signOut
  }

  return (
    <AppBar className={classes.root} position='static' color='default'>
      <Nav className={classes.nav} {...navProps} />
      <Actions className={classes.actions} {...actionsProps} />
    </AppBar>
  )
}

Header.propTypes = {
  routers: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentRoute: PropTypes.string.isRequired,
  loginRoute: PropTypes.object.isRequired,
  signUpRoute: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
}

export default withStyles(style)(Header);
