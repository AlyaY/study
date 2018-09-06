import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../views/Header';
import { routersSelector, currentRouteSelector } from '../selectors';
import { tokenSelector, userIdSelector } from '../../../selectors';
import { setCurrentRoute } from '../actions';
import { removeToken, removeUserId } from '../../../actions';
import { loginRoute, signUpRoute } from '../constants';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    const pathname = this.props.location.pathname;
    const currentRoute = { ...this.props };

    if(pathname !==  currentRoute) {
      this.props.setCurrentRoute({ currentRoute: pathname })
    }
  }

  handleChange = (event, currentRoute) => {
    this.props.setCurrentRoute({ currentRoute });
  }

  signOut = () => {
    // redirect if we havent access to this routes
    this.props.removeToken();
    this.props.removeUserId();
  }

  render () {
    const props = {
      routers: this.props.routers,
      currentRoute: this.props.currentRoute,
      handleChange: this.handleChange,
      loginRoute,
      signUpRoute,
      isLogin: (this.props.token.length !== 0),
      signOut: this.signOut
    };

    return <Header {...props} />
  }
}

HeaderContainer.propTypes = {
  token: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  routers: PropTypes.array.isRequired,
  currentRoute: PropTypes.string.isRequired,
  setCurrentRoute: PropTypes.func.isRequired,
  removeToken: PropTypes.func.isRequired,
  removeUserId: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  routers: routersSelector(state),
  currentRoute: currentRouteSelector(state),
  token: tokenSelector(state),
  userId: userIdSelector(state),
});

const mapDispatchToProps = dispatch => ({
  setCurrentRoute: data => dispatch(setCurrentRoute(data)),
  removeToken: data => dispatch(removeToken(data)),
  removeUserId: data => dispatch(removeUserId(data)),
});

const HeaderWithRoute = withRouter(HeaderContainer)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderWithRoute);
