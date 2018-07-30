import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'

import Routert from '../views/Router'

class App extends Component {
  render () {
    return (
      <div>
        <HashRouter>
          <Routert />
        </HashRouter>
      </div>
    )
  }
}

export default App
