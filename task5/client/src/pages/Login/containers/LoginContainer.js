import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginForm from '../views/LoginForm';
import { validations, errorMessages } from '../constants';
import { submitForm, updateError } from '../actions';
import { setToken, setUserId } from '../../../actions';
import { errorSelector, emailSelector, passwordSelector } from '../selectors';
import { routers } from '../../../modules/Header/constants';
import { login } from '../../../services';

class LoginContainer extends Component {
  componentWillUnmount() {
    this.props.updateError({ error: '' })
  }

  handleSubmit = (user) => {
    const { submitForm, setToken, setUserId, updateError, history} = this.props;
    submitForm(user);

    login(user)
      .then(({ data: { user: { token, _id }} }) => {
        setToken({ token });
        setUserId({ userId: _id });
        updateError({ error: '' })
        history.push(routers[0].path);
      })
      .catch(({ response }) => {
        updateError({ error: response.data.error || '' });
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
    const err = this.props.error;

    const props = {
      err: this.props.error,
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
  setToken: PropTypes.func.isRequired,
  setUserId: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  error: errorSelector(state),
  email: emailSelector(state),
  password: passwordSelector(state),
});

const mapDispatchToProps = dispatch => ({
  submitForm: data => dispatch(submitForm(data)),
  updateError: data => dispatch(updateError(data)),
  setToken: data => dispatch(setToken(data)),
  setUserId: data => dispatch(setUserId(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
