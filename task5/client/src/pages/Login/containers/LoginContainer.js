import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import LoginForm from '../views/LoginForm';
import { validations, errorMessages } from '../constants';
import { submitForm } from '../actions';
import { nameSelector, surnameSelector, emailSelector, passwordSelector } from '../selectors';

const API = 'https://films--library.herokuapp.com/api/auth/';
class LoginContainer extends Component {
  handleSubmit = (user) => {
    console.log(user); 
    this.props.submitForm(user);
    axios(API, {user})
    .then(({ data }) => {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });

    // this.props.history.push('/study/login/success');
  }

  requiredValidation = (value) => {
    return value ? '' : 'Required';
  }

  nameValidation = (name) => {
    return (name.length >= 4) ? '' : errorMessages.name;
  }

  surnameValidation = (surname) => {
    return (surname.length >= 4) ? '' : errorMessages.surname;
  }

  emailValidation = (value) => {
    return (validations.email.test(value)) ? '' : errorMessages.email;
  }

  passwordValidation = (value) => {
    return (validations.password.test(value)) ? '' : errorMessages.password;
  }

  render () {
    const props = {
      onSubmit: this.handleSubmit,
      nameValidation: this.nameValidation,
      surnameValidation: this.surnameValidation,
      emailValidation: this.emailValidation,
      passwordValidation: this.passwordValidation,
      requiredValidation: this.requiredValidation
    }

    return <LoginForm {...props} />
  }
}

LoginContainer.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  name: nameSelector(state),
  surname: surnameSelector(state),
  email: emailSelector(state),
  password: passwordSelector(state),
});

const mapDispatchToProps = dispatch => ({
  submitForm: data => dispatch(submitForm(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
