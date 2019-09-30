import React from "react"
import { renderRoutes } from 'react-router-config'

import { homeRoutes } from './pages/home'
import { contactRoutes } from './pages/contacts'
import { NotFoundPage } from './pages/errors'

import { HeaderBar, FooterBar } from './ui/organisms'
import { MainTemplate } from './ui/templates'


const Root = (properties) => (
  <MainTemplate
    header={<HeaderBar />}
    footer={<FooterBar />}
  >
    {renderRoutes(properties?.route.routes)}
  </MainTemplate>
)

export const routes = [
  {
    component: Root,
    routes: [
      ...homeRoutes(),
      ...contactRoutes(),
      {
        component: NotFoundPage,
      },
    ],
  },
]
