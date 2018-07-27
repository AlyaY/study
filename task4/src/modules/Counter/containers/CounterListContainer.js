import React, { Component } from 'react'
import CounterWrapper from './../views/CounterWrapper'
import { ADD, REMOVE, RESET } from '../constants'

class CounterListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {
          key: 1,
        }
      ],
      number: 1,
      action: '',
    };
  }

  addCounter = () => {
    const newCounters = [...this.state.counters];

    this.setState({
      counters: [...newCounters, { key: this.state.number + 1 }],
      number: this.state.number + 1,
      action: ADD,
    });
  };

  deleteCounter = () => {
    const newCounters = [...this.state.counters];

    if (newCounters.length > 1) {
      this.setState({
        counters: newCounters.slice(0, -1),
        number: this.state.number - 1,
        action: REMOVE,
      });
    }
  };

  resetCounter = () => {
    const newCountres = [...this.state.counters];

    this.setState({
      counters: newCountres.slice(0, 1),
      number: 1,
      action: RESET,
    });
  };

  componentDidMount() {
    console.log('counterList || componentDidMount');
  }
  shouldComponentUpdate() {
    console.log('counterList || shouldComponentUpdate');

    return true;
  }
  componentWillReceiveProps() {
    console.log('counterList || UNSAFE_componentWillRecieveProps');

    return true;
  }
  componentDidUpdate() {
    console.log('counterList || componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('counterList || componentWillUnmount');
  }

  render() {
    console.log('counterList || render');

    const props = {
      addCounter: this.addCounter,
      deleteCounter: this.deleteCounter,
      resetCounter: this.resetCounter,
      action: this.state.action,
      listData: this.state.counters
    };

    return ( <CounterWrapper {...props} />);
  }
}

export default CounterListContainer;
