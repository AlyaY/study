import React, { Component } from 'react'
import Header from '../views/Header'
import { withRouter } from 'react-router'

class HeaderContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      routers: [
        {
          path: '/study/about',
          name: 'О нас'
        },
        {
          path: '/study/counters',
          name: 'Счетчик'
        },
        {
          path: '/study/login',
          name: 'Войти'
        }
      ],
      value: props.location.pathname || ''
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentWillReceiveProps({location: { pathname }}) {
    if(pathname !==  this.state.value) {
      this.setState({ value: pathname });
    }
  }

  render () {
    const props = {
      routers: this.state.routers,
      handleChange: this.handleChange,
      value: this.state.value
    }
    return <Header {...props} />
  }
}

export default withRouter(HeaderContainer)