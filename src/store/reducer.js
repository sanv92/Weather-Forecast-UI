import { combineReducers } from 'redux'

import { forecastsReducer as forecasts } from 'pages/home'


export const rootReducer = combineReducers({
  forecasts,
})
