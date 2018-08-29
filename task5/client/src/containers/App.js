import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Router from '../views/Router';
import getStore from '../store';

class App extends Component {
  render() {
    const { store, persistor } = getStore();

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
