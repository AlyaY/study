import React from 'react'
import style from './styles'

import { withStyles } from '@material-ui/core/styles'

const LoginForm = ({ formData, formErrors, inputHandle, submitHandler, classes }) => {
  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={submitHandler}>
        <label className={classes.label}>
          <input
            className={classes.field}
            onChange={inputHandle}
            name='email'
            placeholder='Введите ваш email'
          />
          <span className={classes.errorText}>{formErrors.email}</span>
        </label>
        <label className={classes.label}>
          <input
            className={classes.field}
            onChange={inputHandle}
            name='password'
            placeholder='Введите ваш пароль'
          />
          <span className={classes.errorText}>{formErrors.password}</span>
        </label>
        <button className={classes.button}>Войти</button>
      </form>
      <pre> {JSON.stringify(formData)}</pre>
    </div>
  )
}

// LoginForm.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
//   submit: PropTypes.func.isRequired
// };

export default withStyles(style)(LoginForm)
