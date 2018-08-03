import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { withStyles } from '@material-ui/core/styles';

import style from './styles';


const LoginForm = ({ email, password, onSubmit, classes }) => {

  const renderField = ({ input, label, type, meta: { touched, error }}) => (
    <label className={classes.label}>
      <input className={classes.field} {...input} placeholder={label} type={type} />
      {touched && (error && <span className={classes.errorText}>{error}</span>)}
    </label>
  );

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={onSubmit} >
       <Field
          component={renderField}
          name='email'
          type='email'
          label='Введите ваш email'
        /> 
        <Field
          component={renderField}
          name='password'
          type='password'
          label='Введите ваш пароль'
        />
        <button className={classes.button}>Войти</button>
      </form>
      <pre>{ JSON.stringify({email, password}) }</pre>
    </div>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default withStyles(style)(LoginForm)
