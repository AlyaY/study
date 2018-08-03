import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import LoginForm from '../views/LoginForm';
import { validations, errorMessages } from '../constants';


class LoginContainer extends Component {
  constructor(props) {
    super(props);

    console.log('--------------------', this)
  }

  handleSubmit = (value) => {
    console.log(value)
    value.preventDefault();

    // const { loginSuccess, loginError, password, email, history } = this.props;

    // const errorPassword = this.validateField('password', password);
    // const errorEmail = this.validateField('email', email);
    
    // if(!errorPassword && !errorEmail) {
    //   loginSuccess();
    //   history.push('/study/login-redux/success');
    // } else {
    //   loginError({ 
    //     errorPassword,
    //     errorEmail,
    //   });
    // }
  }

  render () {
    const props = {
      // email: this.props.email,
      // password: this.props.password,
      onSubmit: this.handleSubmit,
    }

    return <LoginForm {...props} />
  }
}

LoginContainer.propTypes = {
  // password: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // loginSuccess: PropTypes.func.isRequired,
  // loginError: PropTypes.func.isRequired,
  // updatePassword: PropTypes.func.isRequired,
  // updateEmail: PropTypes.func.isRequired,
}

const validateField = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required'
  } else if (!validations.email.test(values.email)) {
    errors.email = errorMessages.email;
  }
 
  if (!values.password) {
    errors.password = 'Required'
  } else if (!validations.password.test(values.password)) {
    errors.password = errorMessages.password;
  }

  return errors;
}

export default reduxForm({
  form: 'login',
  validate: validateField
})(LoginContainer);
