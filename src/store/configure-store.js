import { createStore, applyMiddleware, compose } from 'redux'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'


import { rootReducer } from './reducer'


const DEV_ENV = process.env.NODE_ENV === 'development'
const PROD_ENV = process.env.NODE_ENV === 'production'
const loggerOptions = {
  predicate: () => DEV_ENV,
  collapsed: true,
}

const getDevelopmentToolsExtensionCompose = () => window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const configureStore = (initialState = {}) => {
  const middlewares = [
    thunk,
    createLogger(loggerOptions),
  ]

  const composeEnhancers = PROD_ENV ? compose : getDevelopmentToolsExtensionCompose()

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )
}
