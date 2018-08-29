import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../views/Header';
import { routersSelector, currentRouteSelector } from '../selectors';
import { setCurrentRoute } from '../actions';

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

  render () {
    const props = {
      routers: this.props.routers,
      currentRoute: this.props.currentRoute,
      handleChange: this.handleChange,
    };

    return <Header {...props} />
  }
}

HeaderContainer.propTypes = {
  routers: PropTypes.array.isRequired,
  currentRoute: PropTypes.string.isRequired,
  setCurrentRoute: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  routers: routersSelector(state),
  currentRoute: currentRouteSelector(state),
});

const mapDispatchToProps = dispatch => ({
  setCurrentRoute: data => dispatch(setCurrentRoute(data)),
});

const HeaderWithRoute = withRouter(HeaderContainer)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderWithRoute);
