import React from 'react'

import { ContactUsPage } from './pages'


export const contactRoutes = () => [
  {
    path: '/contacts',
    exact: true,
    component: ContactUsPage,
  },
]
