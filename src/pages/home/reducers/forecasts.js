import { createActions, handleActions } from 'redux-actions'

import { fetchStatus } from 'lib/fetching-api'


const initialState = ({
  byForecastId: {},
  forecastIds: [],
  fetching: ({
    status: fetchStatus.initial,
    loading: false,
    error: null,
  }),
})

export const Actions = createActions({
  setForecasts: (data) => data,
  reset: () => initialState,
  loadingStart: () => ({ status: fetchStatus.loading, loading: true, error: null }),
  loadingFinish: () => ({ status: fetchStatus.ready, loading: false, error: null }),
  loadingFail: (error) => ({ status: fetchStatus.failed, loading: false, error }),
}, { prefix: 'forecasts' })

export const reducer = handleActions({
  [Actions.setForecasts]:
    (previousState, { payload: forecasts }) => ({
      ...previousState,
      byForecastId: forecasts.reduce((previous, current) => ({
        ...previous,
        [current.uuid]: ({ ...current, forecastId: current.uuid }),
      }), {}),
      forecastIds: forecasts.map((forecast) => forecast.uuid),
    }),
  [Actions.resetForecasts]:
    (previousState, { payload: data }) => ({
      ...previousState, model: data,
    }),
  [Actions.loadingStart]:
    (previousState, { payload: fetching }) => ({
      ...previousState, fetching,
    }),
  [Actions.loadingFinish]:
    (previousState, { payload: fetching }) => ({
      ...previousState, fetching,
    }),
  [Actions.loadingFail]:
    (previousState, { payload: fetching }) => ({
      ...previousState, fetching,
    }),
}, initialState)
