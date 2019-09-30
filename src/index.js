import * as React from 'react'

import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './app'


import { configureStore } from './store'


const root = document.querySelector('#root')
const store = configureStore()

const render = () => {
  if (root) {
    ReactDom.render(
      <Provider store={store}>
        <App />
      </Provider>,
      root,
    )
  }
}

render()
