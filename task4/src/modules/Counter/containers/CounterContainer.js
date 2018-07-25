import React, { Component } from 'react';
import Counter from '../views/Counter'

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    this.setState((prevState) => {
      return { count: prevState.count > 0 ? prevState.count - 1 : 0 };
    });
  }

  reset = () => {
    this.setState({ count: 0 });
  }

  render() {
    const props = {
      increment: this.increment,
        decrement: this.decrement,
        reset: this.reset,
        counter: this.state.count,
    }

    return (
      <Counter {...props} />
    );
  }
}

export default CounterContainer;
