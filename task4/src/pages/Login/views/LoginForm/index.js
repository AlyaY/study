import React from 'react'
import PropTypes from 'prop-types'
import style from './styles'

import { withStyles } from '@material-ui/core/styles'

const LoginForm = ({ formData, formErrors, submitHandler, classes }) => {
  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={submitHandler} >
        <label className={classes.label}>
          <input
            className={classes.field}
            value={formData.email}
            name='email'
            placeholder='Введите ваш email'
          />
          <span className={classes.errorText}>{formErrors.email}</span>
        </label>
        <label className={classes.label}>
          <input
            className={classes.field}
            value={formData.password}
            name='password'
            placeholder='Введите ваш пароль'
          />
          <span className={classes.errorText}>{formErrors.password}</span>
        </label>
        <button className={classes.button}>Войти</button>
      </form>
      <pre>{JSON.stringify(formData)}</pre>
    </div>
  )
}

LoginForm.propTypes = {
  formData: PropTypes.object.isRequired,
  formErrors: PropTypes.object.isRequired,
  submitHandler: PropTypes.func.isRequired
};

export default withStyles(style)(LoginForm)
