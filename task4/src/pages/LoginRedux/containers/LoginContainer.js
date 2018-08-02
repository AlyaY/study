import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from '../views/LoginForm'
import { validations, errorMessages } from '../constants'
import { updateEmail, updatePassword, loginSuccess, loginError } from '../actions'

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

      console.log(this.props, this)
      this.props.history.push('/study/login-redux/success');
    } else {
      this.props.loginError({ 
        errorPassword,
        errorEmail
      })
    }
  }

  render () {
    const props = {
      email: this.props.email,
      password: this.props.password,
      errorEmail: this.props.errorEmail,
      errorPassword: this.props.errorPassword,
      onChangeEmail: this.props.onChangeEmail,
      onChangePassword: this.props.onChangePassword,
      onSubmit: this.handleSubmit
    }

    return <LoginForm {...props} />
  }
}

const mapStateToProps = state => ({
  password: state.loginRedux.passwordReducer,
  email: state.loginRedux.emailReducer,
  errorPassword: state.loginRedux.passwordErrorReducer,
  errorEmail: state.loginRedux.emailErrorReducer
})

const mapDispatchToProps = dispatch => ({
  loginSuccess: data => dispatch(loginSuccess(data)),
  loginError: data => dispatch(loginError(data)),
  onChangeEmail: event => dispatch(updateEmail(event.target.value)),
  onChangePassword: event => dispatch(updatePassword(event.target.value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
