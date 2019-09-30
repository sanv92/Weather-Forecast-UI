import { createSelector } from 'reselect'


const forecastsRootSelector = createSelector(
  (state) => state.forecasts,
  (forecasts) => forecasts,
)

export const forecastsFetchingSelector = createSelector(
  forecastsRootSelector,
  (forecasts) => forecasts.fetching,
)

export const allForecastsSelector = createSelector(
  forecastsRootSelector,
  (forecasts) => (
    forecasts.forecastIds.map(
      (forecastId) => forecasts.byForecastId[forecastId],
    )
  ),
)

const byForecastIdSelector = createSelector(
  forecastsRootSelector,
  (forecasts) => forecasts.byForecastId,
)

export const forecastByIdSelector = createSelector(
  byForecastIdSelector,
  (_, properties) => properties.match.params.placeId,
  (byForecastId, forecastId) => byForecastId[forecastId],
)
