import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginForm from '../views/LoginForm';
import { validations, errorMessages } from '../constants';
import { 
  updatePassword,
  updateEmail,
  loginSuccess,
  loginError
} from '../actions';
import {
  emailSelector,
  passwordSelector,
  emailErrorSelector,
  passwordErrorSelector,
} from '../selectors';

class LoginContainer extends Component {

  validateField = (name, value) => {
    switch (name) {
      case 'email' : 
        return validations.email.test(value) ? '' : errorMessages.email;
      case 'password' : 
        return validations.password.test(value) ? '' : errorMessages.password;
      default:
        break;
    }

    return '';
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const errorPassword = this.validateField('password', this.props.password);
    const errorEmail = this.validateField('email', this.props.email);
    
    if(!errorPassword && !errorEmail) {
      this.props.loginSuccess();
      this.props.history.push('/study/login-redux/success');
    } else {
      this.props.loginError({ 
        errorPassword,
        errorEmail,
      });
    }
  }

  onChangePassword = (event) => {
    this.props.updatePassword({ password: event.target.value });
  }

  onChangeEmail = (event) => {
    this.props.updateEmail({ email: event.target.value });
  }

  render () {
    const props = {
      email: this.props.email,
      password: this.props.password,
      errorEmail: this.props.errorEmail,
      errorPassword: this.props.errorPassword,
      onChangePassword: this.onChangePassword,
      onChangeEmail: this.onChangeEmail,
      onSubmit: this.handleSubmit,
    }

    return <LoginForm {...props} />
  }
}

LoginContainer.propTypes = {
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  errorPassword: PropTypes.string.isRequired,
  errorEmail: PropTypes.string.isRequired,
  loginSuccess: PropTypes.func.isRequired,
  loginError: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  updateEmail: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  password: passwordSelector(state),
  email: emailSelector(state),
  errorPassword: passwordErrorSelector(state),
  errorEmail: emailErrorSelector(state),
});

const mapDispatchToProps = dispatch => ({
  loginSuccess: data => dispatch(loginSuccess(data)),
  loginError: data => dispatch(loginError(data)),
  updatePassword: data => dispatch(updatePassword(data)),
  updateEmail: data => dispatch(updateEmail(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
