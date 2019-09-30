import React from 'react'
import PropTypes from 'prop-types'

import { ContentTemplate } from 'ui/templates'


export const NotFoundPage = ({ message }) => (
  <ContentTemplate>
    <h1>{message}</h1>
  </ContentTemplate>
)

NotFoundPage.defaultProps = {
  message: 'Page not found!',
}

NotFoundPage.propTypes = {
  message: PropTypes.string,
}
