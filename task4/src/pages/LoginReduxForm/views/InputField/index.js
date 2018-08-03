import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import style from './styles';

const InputField = ({ classes, input, label, type, meta: { touched, error }}) => {
  return (
    <label className={classes.label}>
      <input className={classes.field} {...input} placeholder={label} type={type} />
      {touched && (error && <span className={classes.errorText}>{error}</span>)}
    </label>
  )
}

InputField.propTypes = {
}

export default withStyles(style)(InputField);
