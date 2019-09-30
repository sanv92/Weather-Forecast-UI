import React from 'react'

import { redirectTo } from 'lib/router-config-components'

import { HomePage, PlacesPage } from './pages'


export const homeRoutes = () => [
  {
    path: '/',
    exact: true,
    component: redirectTo('/forecasts'),
  },
  {
    path: '/forecasts',
    exact: true,
    component: HomePage,
  },
  {
    path: '/forecasts/:placeId',
    exact: true,
    component: PlacesPage,
  },
]
