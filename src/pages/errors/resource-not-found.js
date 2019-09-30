import React from 'react'
import PropTypes from 'prop-types'

import { ContentTemplate } from 'ui/templates'


export const ResourceNotFound = ({ message }) => (
  <ContentTemplate>
    <h1>{message}</h1>
  </ContentTemplate>
)

ResourceNotFound.defaultProps = {
  message: 'Resource not found!',
}

ResourceNotFound.propTypes = {
  message: PropTypes.string,
}
