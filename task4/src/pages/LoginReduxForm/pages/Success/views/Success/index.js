import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import style from './styles';

const Success = ({ email, password, classes }) => {
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>You login success</h2>
      <p className={classes.text}>Email: {email}</p>
      <p className={classes.text}>Password: {password}</p>
    </div>
  )
}

Success.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}

export default withStyles(style)(Success);
