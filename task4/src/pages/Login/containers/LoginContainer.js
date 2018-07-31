import React, { Component } from 'react'
import LoginForm from '../views/LoginForm'
import { validations, errorMessages } from '../constants'

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      email: '',
      errorPassword: '',
      errorEmail: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  };

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

    const errorPassword = this.validateField('password', this.state.password);
    const errorEmail = this.validateField('email', this.state.email);
    
    if(!errorPassword && !errorEmail) {
      console.log(JSON.stringify(this.state));

      this.setState({ 
        password: '',
        email: '',
        errorPassword: '',
        errorEmail: ''
      })
    } else {
      this.setState({ 
        errorPassword,
        errorEmail
      })
    }
  }

  render () {
    const props = {
      email: this.state.email,
      password: this.state.password,
      errorEmail: this.state.errorEmail,
      errorPassword: this.state.errorPassword,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit
    }

    return <LoginForm {...props} />
  }
}

export default LoginContainer
