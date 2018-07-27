import React, { Component } from 'react'
import Counter from '../views/Counter'
import Actions from '../constants'

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0,
    };
  }

  isEven = (num) => (num% 2 === 0);

  increment = () => {
    console.log('-----------------');
    console.log('--- increment ---');

    this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    console.log('-----------------');
    console.log('--- decrement ---');

    this.setState((prevState) => {
      return { count: prevState.count > 0 ? prevState.count - 1 : 0 };
    });
  }

  reset = () => {
    console.log('-------------');
    console.log('--- reset ---');

    this.setState({ count: 0 });
  }

  componentDidMount() {
    console.log('counter || componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('counter || shouldComponentUpdate');

    return this.state.count !== nextState.count;
  }
  componentWillReceiveProps(nextProps) {
    console.log('counter || UNSAFE_componentWillRecieveProps');

    if(nextProps.action === Actions.ADD && this.isEven(this.state.count)) {
      this.setState({ count: this.state.count + 1 });
    }

    if(nextProps.action === Actions.REMOVE  && !this.isEven(this.state.count)) {
      this.setState({ count: this.state.count - 1 });
    }
  }
  componentDidUpdate() {
    console.log('counter || componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('counter || componentWillUnmount');
  }

  render() {
    console.log('counter || render');

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
