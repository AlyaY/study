import React, { Component } from 'react'
import LoginForm from '../views/LoginForm'

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        password: '',
        email: ''
      },
      formErrors: {
        password: '',
        email: ''
      }
    };

    this.validation = {
      email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      password: /[^]{6,}/,
    }
  }

  inputHandle = (event) => {
    this.setState({ formData: { 
        ...this.state.formData,
        [event.target.name]: event.target.value
      }
    })
  };

  validateField = (name, value) => {
    switch (name) {
      case 'email' : 
        return this.validation.email.test(value) ? '' : 'Envalid email';
      case 'password' : 
        return this.validation.password.test(value) ? '' : 'Envalid password'
      default:
        break;
    }

    return '';
  }

  submitHandler = (event) => {
    event.preventDefault();

    const formErrors = {};
    let isValid = true;
    let errorMessage;

    for(let field in this.state.formData) {
      errorMessage = this.validateField(field, this.state.formData[field]);
      
      if(errorMessage) {
        formErrors[field] = errorMessage;
        isValid = false;
      }
    }

    if(isValid) {
      console.log(JSON.stringify(this.state.formData));

      event.target.reset();

      this.setState({ 
        formData: {
          password: '',
          email: ''
        },
        formErrors: {
          password: '',
          email: ''
        }
      })
    } else {
      this.setState({ 
        formErrors
      })
    }
  }

  render () {
    const props = {
      formData: this.state.formData,
      formErrors: this.state.formErrors,
      inputHandle: this.inputHandle,
      submitHandler: this.submitHandler
    }

    return <LoginForm {...props} />
  }
}

export default LoginContainer
