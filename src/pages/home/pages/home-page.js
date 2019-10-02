import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { branch, compose, lifecycle, renderComponent } from 'recompose'
import { connect } from 'react-redux'
import { Button, Header, Table } from 'semantic-ui-react'

import { isFailed, loadingIfNoDataHOC } from 'lib/hocs'
import { ResourceNotFound } from 'pages/errors'
import { IconDay } from 'ui/atoms'

import { HomeContentTemplate } from '../templates'

import { fetchForecasts } from '../actions'
import { ForecastsActions } from '../reducers'
import { allForecastsSelector, forecastsFetchingSelector } from '../selectors'


const mapStateToProperties = (state) => ({
  forecasts: allForecastsSelector(state),
  fetching: forecastsFetchingSelector(state),
})

const mapDispatchToProperties = (dispatch) => ({
  getForecasts: () => (
    dispatch(fetchForecasts())
  ),
  reset: () => (
    dispatch(ForecastsActions.reset())
  ),
})

const enhance = compose(
  connect(mapStateToProperties, mapDispatchToProperties),
  lifecycle({
    componentDidMount() {
      this.props.getForecasts()
    },
    componentWillUnmount() {
      this.props.reset()
    },
  }),
  branch((properties) => isFailed(properties.fetching), renderComponent(ResourceNotFound)),
  loadingIfNoDataHOC(),
)

const HomeView = ({ forecasts }) => (
  <HomeContentTemplate>
    <Header as="h1">Weather now - Estonia</Header>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Day / Night</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {forecasts.map((forecast) => (
          <Table.Row key={forecast.forecastId}>
            <Table.Cell width={2}>
              {forecast.date}
            </Table.Cell>
            <Table.Cell width={1} textAlign="center">
              <IconDay
                name={forecast.timeOfDay.name}
              />
            </Table.Cell>
            <Table.Cell width={3}>
              {forecast.description}
            </Table.Cell>
            <Table.Cell width={1} textAlign="center">
              <NavLink to={`/forecasts/${forecast.uuid}`}>
                <Button primary>
                  More details
                </Button>
              </NavLink>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </HomeContentTemplate>
)

HomeView.propTypes = {
  forecasts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export const HomePage = enhance(HomeView)
