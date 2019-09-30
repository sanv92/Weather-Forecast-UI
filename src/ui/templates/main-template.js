import React from 'react'
import PropTypes from 'prop-types'

import { Grid } from 'semantic-ui-react'


export const MainTemplate = ({ header, footer, children }) => (
  <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={16}>
        {header && <>{header}</>}
      </Grid.Column>
      <Grid.Column width={16}>
        {children}
      </Grid.Column>
      <Grid.Column width={16}>
        {footer && <>{footer}</>}
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

MainTemplate.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node.isRequired,
}

MainTemplate.defaultProps = {
  header: null,
  footer: null,
}
