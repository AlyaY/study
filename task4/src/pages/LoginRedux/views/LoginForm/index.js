import React from 'react'
import PropTypes from 'prop-types'
import style from './styles'

import { withStyles } from '@material-ui/core/styles'

const LoginForm = ({ email, password, errorEmail, errorPassword, onChange, onSubmit, classes }) => {
  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={onSubmit} >
        <label className={classes.label}>
          <input
            className={classes.field}
            value={email}
            onChange={onChange}
            name='email'
            placeholder='Введите ваш email'
          />
          <span className={classes.errorText}>{errorEmail}</span>
        </label>
        <label className={classes.label}>
          <input
            className={classes.field}
            value={password}
            onChange={onChange}
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
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(style)(LoginForm)
