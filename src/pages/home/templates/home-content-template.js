import React from 'react'
import PropTypes from 'prop-types'

import { ContentTemplate } from 'ui/templates'


export const HomeContentTemplate = ({ children }) => (
  <ContentTemplate>
    {children}
  </ContentTemplate>
)

HomeContentTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}
