import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import pokeReducer from './reducers/pokeReducer'
const logger = require('./utils/logger')
const store = configureStore({
  reducer:{
    pokemon: pokeReducer
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

