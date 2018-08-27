import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import LoginForm from '../views/LoginForm';
import { validations, errorMessages } from '../constants';
import { submitForm, updateError } from '../actions';
import { errorSelector, emailSelector, passwordSelector } from '../selectors';

import { API_LOGIN } from '../../../constants';

class LoginContainer extends Component {
  handleSubmit = (user) => {
    this.props.submitForm(user);

    axios.post(API_LOGIN, {user})
      .then(({ data: { user: { token }} }) => {
        localStorage.setItem('token', token);

        this.props.history.push('/study/films');
      })
      .catch( (error) => {
        this.props.updateError({payload: error});
      });
  }

  requiredValidation = (value) => {
    return value ? '' : 'Required';
  }

  emailValidation = (value) => {
    return (validations.email.test(value)) ? '' : errorMessages.email;
  }

  passwordValidation = (value) => {
    return (validations.password.test(value)) ? '' : errorMessages.password;
  }

  render () {
    const props = {
      error: this.props.error,
      onSubmit: this.handleSubmit,
      emailValidation: this.emailValidation,
      passwordValidation: this.passwordValidation,
      requiredValidation: this.requiredValidation
    }

    return <LoginForm {...props} />
  }
}

LoginContainer.propTypes = {
  error: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
  updateError: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  error: errorSelector(state),
  email: emailSelector(state),
  password: passwordSelector(state),
});

const mapDispatchToProps = dispatch => ({
  submitForm: data => dispatch(submitForm(data)),
  updateError: data => dispatch(updateError(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
