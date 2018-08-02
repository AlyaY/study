import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Success from '../views/Success';

class SuccessContainer extends Component {
  render () {
    const props = {
      email: this.props.email,
      password: this.props.password,
    };

    return <Success {...props} />
  }
}

SuccessContainer.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  password: state.loginRedux.passwordReducer,
  email: state.loginRedux.emailReducer
})

export default connect(
  mapStateToProps
)(SuccessContainer);
