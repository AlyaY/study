import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import { withStyles } from '@material-ui/core/styles';

import style from './styles';
import InputField from '../InputField';

const LoginForm = (props) => {
  const { email, password, emailOnChange, passwordOnChange, emailValidation, passwordValidation, onSubmit, classes, handleSubmit } = props;

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)} >
       <Field
          component={InputField}
          name='email'
          type='email'
          label='Введите ваш email'
          validate={emailValidation}
          onChange={emailOnChange}
        /> 
        <Field
          component={InputField}
          name='password'
          type='password'
          label='Введите ваш пароль'
          validate={passwordValidation}
          onChange={passwordOnChange}
        />
        <button className={classes.button}>Войти</button>
      </form>
      <pre>{ JSON.stringify({email, password}) }</pre>
    </div>
  )
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  emailValidation: PropTypes.func.isRequired,
  passwordValidation: PropTypes.func.isRequired,
  emailOnChange: PropTypes.func.isRequired,
  passwordOnChange: PropTypes.func.isRequired,
}

const LoginFormWithStyle = withStyles(style)(LoginForm);

export default reduxForm({
  form: 'login',
})(LoginFormWithStyle);
