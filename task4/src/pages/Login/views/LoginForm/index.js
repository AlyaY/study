import React from 'react';
import PropTypes from 'prop-types';
import style from './styles';

import { withStyles } from '@material-ui/core/styles';

const LoginForm = ({ email, password, errorEmail, errorPassword, handleChange, handleSubmit, classes }) => {
  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit} >
        <label className={classes.label}>
          <input
            className={classes.field}
            value={email}
            onChange={handleChange}
            name='email'
            placeholder='Введите ваш email'
          />
          <span className={classes.errorText}>{errorEmail}</span>
        </label>
        <label className={classes.label}>
          <input
            className={classes.field}
            value={password}
            onChange={handleChange}
            name='password'
            type='password'
            placeholder='Введите ваш пароль'
          />
          <span className={classes.errorText}>{errorPassword}</span>
        </label>
        <button className={classes.button}>Войти</button>
      </form>
      <pre>{ JSON.stringify({email, password}) }</pre>
    </div>
  )
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errorEmail: PropTypes.string.isRequired,
  errorPassword: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default withStyles(style)(LoginForm);
