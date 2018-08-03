import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import { withStyles } from '@material-ui/core/styles';

import style from './styles';
import { validations, errorMessages } from '../../constants';

const LoginForm = (props) => {
  const { emailValidation, passwordValidation, onSubmit, classes, handleSubmit } = props;
   
  const renderField = ({ input, label, type, meta: { touched, error }}) => (
    <label className={classes.label}>
      <input className={classes.field} {...input} placeholder={label} type={type} />
      {touched && (error && <span className={classes.errorText}>{error}</span>)}
    </label>
  );

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)} >
       <Field
          component={renderField}
          name='email'
          type='email'
          label='Введите ваш email'
          validate={emailValidation}
        /> 
        <Field
          component={renderField}
          name='password'
          type='password'
          label='Введите ваш пароль'
          validate={passwordValidation}
        />
        <button className={classes.button}>Войти</button>
      </form>
      <pre>{ JSON.stringify({props}) }</pre>
    </div>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  emailValidation: PropTypes.func.isRequired,
  passwordValidation: PropTypes.func.isRequired,
}

const LoginFormWithStyle = withStyles(style)(LoginForm);

export default reduxForm({
  form: 'login',
})(LoginFormWithStyle);
