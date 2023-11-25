import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './reducers/store'
import './index.css'
// const logger = require('./utils/logger')
const root = ReactDOM.createRoot(document.getElementById('root'))
// logger.info(store.getState())
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

