import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { routes } from './routes'

import 'semantic-ui-css/semantic.min.css'


export const App = () => (
  <Router>
    {renderRoutes(routes)}
  </Router>
)
