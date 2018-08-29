import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignUpForm from '../views/SignUpForm';
import { validations, errorMessages } from '../constants';
import { submitForm, updateError } from '../actions';
import { setToken } from '../../../actions';
import { 
  errorSelector,
  nameSelector,
  surnameSelector,
  emailSelector,
  passwordSelector
} from '../selectors';
import { routers } from '../../../modules/Header/constants';
import { signup } from '../../../services';

class SignUpContainer extends Component {
  handleSubmit = (user) => {
    this.props.submitForm(user);

    signup(user)
      .then(({ data: { user: { token }} }) => {
        this.props.setToken({ token });
        this.props.history.push(routers[0].path);
      })
      .catch( ({ response }) => {
        this.props.updateError({ error: response.data.error || '' });
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
    const err = this.props.error;

    const props = {
      err,
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
  error: PropTypes.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  error: errorSelector(state),
  name: nameSelector(state),
  surname: surnameSelector(state),
  email: emailSelector(state),
  password: passwordSelector(state),
});

const mapDispatchToProps = dispatch => ({
  submitForm: data => dispatch(submitForm(data)),
  updateError: data => dispatch(updateError(data)),
  setToken: data => dispatch(setToken(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpContainer);
