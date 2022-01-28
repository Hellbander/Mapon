import React from 'react'
import { Provider } from 'react-redux'

import store from './store/store'

import CakeContainer from './componets/Select'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Route report</h2>
        <CakeContainer />
      </div>
    </Provider>
  )
}

export default App;
