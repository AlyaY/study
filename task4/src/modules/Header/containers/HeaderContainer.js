import React, { Component } from 'react'
import Header from '../views/Header'

class HeaderContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      routers: [
        {
          path: '/study/about',
          name: 'О нас',
          value: 0
        },
        {
          path: '/study/counters',
          name: 'Счетчик',
          value: 1
        }
      ],
      value: -1
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render () {
    const props = {
      routers: this.state.routers,
      handleChange: this.handleChange,
      value: this.state.value
    }
    return <Header {...props} />
  }
}

export default HeaderContainer
