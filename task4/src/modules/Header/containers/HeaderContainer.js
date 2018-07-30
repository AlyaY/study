import React, { Component } from 'react'
import Header from '../views/Header'

class HeaderContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      routers: [
        {
          path: '/about',
          name: 'О нас',
          value: 0
        },
        {
          path: '/counters',
          name: 'Счетчик',
          value: 1
        }
      ],
      value: -1
    }
  }

  handleChange = (event, value) => {
    console.log(event, value);
    this.setState({ value });
  };

  // handleChange = (event, value) => {
  //   // this.props.history.push(value);
  // }

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
