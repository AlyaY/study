import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import { withStyles } from '@material-ui/core/styles';

import style from './styles';
import InputField from '../InputField';

const SignUpForm = (props) => {
  const { 
    emailValidation,
    passwordValidation,
    requiredValidation,
    onSubmit,
    classes,
    handleSubmit
  } = props;

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)} >
       <Field
          component={InputField}
          name='name'
          type='text'
          label='Введите ваше имя'
          validate={[requiredValidation]}
        /> 
       <Field
          component={InputField}
          name='surname'
          type='text'
          label='Введите вашу фамилию'
          validate={[requiredValidation]}
        /> 
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
        <button className={classes.button}>Зарегестрироваться</button>
      </form>
    </div>
  )
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  nameValidation: PropTypes.func.isRequired,
  surnameValidation: PropTypes.func.isRequired,
  emailValidation: PropTypes.func.isRequired,
  passwordValidation: PropTypes.func.isRequired,
  requiredValidation: PropTypes.func.isRequired,
}

const SignUpFormWithStyle = withStyles(style)(SignUpForm);

export default reduxForm({
  form: 'signUp',
})(SignUpFormWithStyle);
