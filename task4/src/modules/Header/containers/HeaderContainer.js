import React, { Component } from 'react'
import Header from '../views/Header'

class HeaderContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      routers: [
        {
          path: '/about',
          component: '',
          name: 'О нас'
        },
        {
          path: '/counters',
          component: '',
          name: 'Счетчик'
        }
      ]
    }
  }

  render () {
    const props = {
      routers: this.state.routers
    }

    return (
      <Header {...props} />
    )
  }
}

export default HeaderContainer
