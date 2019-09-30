import React from 'react'
import { branch, compose, renderComponent } from 'recompose'
import { connect } from 'react-redux'
import { Divider, Grid, Header, Table } from 'semantic-ui-react'

import { NotFoundPage } from 'pages/errors'
import { IconDay } from 'ui/atoms'

import { HomeContentTemplate } from '../templates'
import { forecastByIdSelector } from '../selectors'


const mapStateToProperties = (state, properties) => ({
  forecast: forecastByIdSelector(state, properties),
  isNew: !forecastByIdSelector(state, properties),
})

const enhance = compose(
  connect(mapStateToProperties),
  branch((properties) => properties.isNew, renderComponent(NotFoundPage)),
)

const PlacesView = (properties) => {
  const { forecast: { date, timeOfDayType, description, places } } = properties
  const [year, month, day] = date
  const isForecast = places.length <= 0

  return (
    <HomeContentTemplate>
      <Grid columns='three' divided>
        <Grid.Row>
          <Grid.Column width={4} textAlign="center">
            <Header as="h1">{timeOfDayType.name} - {year}-{month}-{day}</Header>
            <IconDay name={timeOfDayType.value} size="massive" />
            <Divider />
            <p>
              {description}
            </p>
          </Grid.Column>
          <Grid.Column width={12}>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Place</Table.HeaderCell>
                  <Table.HeaderCell>Temperature</Table.HeaderCell>
                  <Table.HeaderCell>Phenomenon</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {places.map((forecast) => {
                  const { placeType, prediction: { temperature } } = forecast

                  return (
                    <Table.Row key={forecast.forecastId}>
                      <Table.Cell width={2}>
                        {placeType.name}
                      </Table.Cell>
                      <Table.Cell width={1} textAlign="center">
                        {temperature.min} .. {temperature.max}
                      </Table.Cell>
                      <Table.Cell width={3}>
                        {temperature.phenomenon.name}
                      </Table.Cell>
                    </Table.Row>
                  )
                })}
              </Table.Body>
            </Table>
            {isForecast && (
              <>
                <Divider />
                <p>Data will be available soon ...</p>
              </>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </HomeContentTemplate>
  )
}

export const PlacesPage = enhance(PlacesView)
