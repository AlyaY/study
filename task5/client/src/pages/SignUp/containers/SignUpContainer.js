import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import SignUpForm from '../views/SignUpForm';
import { validations, errorMessages } from '../constants';
import { submitForm } from '../actions';
import { setToken } from '../../../actions';
import { nameSelector, surnameSelector, emailSelector, passwordSelector } from '../selectors';

import { API_SIGNUP } from '../../../constants';
import { routers } from '../../../modules/Header/constants';

class SignUpContainer extends Component {
  handleSubmit = (user) => {
    this.props.submitForm(user);

    axios.post(API_SIGNUP, {user})
      .then(({ data: { user: { token }} }) => {
        this.props.setToken({ token });
        this.props.history.push(routers[0].path);
      })
      .catch(function (error) {
        console.log(error);
      });

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

    return <SignUpForm {...props} />
  }
}

SignUpContainer.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  name: nameSelector(state),
  surname: surnameSelector(state),
  email: emailSelector(state),
  password: passwordSelector(state),
});

const mapDispatchToProps = dispatch => ({
  submitForm: data => dispatch(submitForm(data)),
  setToken: data => dispatch(setToken(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpContainer);
