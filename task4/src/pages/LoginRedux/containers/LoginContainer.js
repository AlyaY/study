import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../views/LoginForm';
import { validations, errorMessages } from '../constants';
import { updateInput, loginSuccess, loginError } from '../actions';

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

  handleInput = (event) => {
    this.props.updateInput({ [event.target.name]: event.target.value });
  }

  render () {
    const props = {
      email: this.props.email,
      password: this.props.password,
      errorEmail: this.props.errorEmail,
      errorPassword: this.props.errorPassword,
      onChange: this.handleInput,
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
  updateInput: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  password: state.loginRedux.passwordReducer,
  email: state.loginRedux.emailReducer,
  errorPassword: state.loginRedux.passwordErrorReducer,
  errorEmail: state.loginRedux.emailErrorReducer,
});

const mapDispatchToProps = dispatch => ({
  loginSuccess: data => dispatch(loginSuccess(data)),
  loginError: data => dispatch(loginError(data)),
  updateInput: data => dispatch(updateInput(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
