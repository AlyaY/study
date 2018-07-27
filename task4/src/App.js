import React, { Component } from 'react'
import Counter from './modules/Counter'
import Header from './modules/Header'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Counter />
      </div>
    )
  }
}

export default App
