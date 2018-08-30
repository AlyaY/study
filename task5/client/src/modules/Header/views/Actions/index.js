import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import style from './styles';

const Actions = ({ loginRoute, signUpRoute, isLogin, signOut, classes }) => {
  const signOutBtn = (
    <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={signOut}
      >
      Выйти
    </Button>
  );

  const signInBtns = (
    <div>
      <Button 
        variant="contained"
        color="primary"
        className={classes.button}
        component={ ({...props}) => <Link to={signUpRoute.path} {...props} /> }>
        {signUpRoute.name}
      </Button>
      <Button 
        variant="contained"
        color="primary"
        className={classes.button}
        component={ ({...props}) => <Link to={loginRoute.path} {...props} /> }>
        {loginRoute.name}
      </Button>
    </div>
  );

  return (
    <div className={classes.root}>
      { isLogin ? signOutBtn : signInBtns }
    </div>
  )
}

Actions.propTypes = {
  loginRoute: PropTypes.object.isRequired,
  signUpRoute: PropTypes.object.isRequired,
  isLogin: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired,
}

export default withStyles(style)(Actions);
