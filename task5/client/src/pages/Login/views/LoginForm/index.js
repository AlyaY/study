import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import { withStyles } from '@material-ui/core/styles';

import style from './styles';
import InputField from '../InputField';

const LoginForm = (props) => {
  const { 
    emailValidation,
    passwordValidation,
    requiredValidation,
    onSubmit,
    classes,
    handleSubmit,
    err
  } = props;

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)} >
       <Field
          component={InputField}
          name='email'
          type='email'
          label='Введите ваш email'
          validate={[requiredValidation, emailValidation]}
        /> 
        <Field
          component={InputField}
          name='password'
          type='password'
          label='Введите ваш пароль'
          validate={[requiredValidation, passwordValidation]}
        />
        <p className={classes.error}>{err && JSON.stringify(err)}</p>
        <button className={classes.button}>Войти</button>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  err: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
  emailValidation: PropTypes.func.isRequired,
  passwordValidation: PropTypes.func.isRequired,
  requiredValidation: PropTypes.func.isRequired,
}

const LoginFormWithStyle = withStyles(style)(LoginForm);

export default reduxForm({
  form: 'login',
})(LoginFormWithStyle);
