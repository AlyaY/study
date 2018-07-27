import React, { Component } from 'react'
import Header from '../views/Header'

class HeaderContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      routers: [
        {
          path: '/about',
          name: 'О нас'
        },
        {
          path: '/counters',
          name: 'Счетчик'
        }
      ],
      value: 0
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
