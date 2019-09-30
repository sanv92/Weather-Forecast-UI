import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'semantic-ui-react'


export const IconDay = ({ name, size }) => (
  name === 'DAY'
    ? <Icon name="sun" size={size} color="yellow" />
    : <Icon name="moon" size={size} />
)

IconDay.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
}

IconDay.defaultProps = {
  name: 'DAY',
  size: 'large',
}
