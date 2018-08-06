import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Success from '../views/Success';
import { emailSelector, passwordSelector } from '../../../selectors';

class SuccessContainer extends Component {
  render () {
    console.log('----SuccessContainer', this)
    const props = {
      email: this.props.email,
      password: this.props.password,
    };

    return <Success {...props} />
  }
}

SuccessContainer.propTypes = {
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  password: passwordSelector(state),
  email: emailSelector(state),
})

export default connect(
  mapStateToProps
)(SuccessContainer);
