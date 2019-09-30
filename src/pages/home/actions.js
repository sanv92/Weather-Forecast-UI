import { ForecastsActions } from './reducers'
import { forecastsApi } from './api'


export const fetchForecasts = () => (
  (dispatch) => {
    dispatch(ForecastsActions.loadingStart())
    forecastsApi.getTemperatureForPlaces()
      .then((response) => {
        dispatch(ForecastsActions.setForecasts(response))
        dispatch(ForecastsActions.loadingFinish())
      })
      .catch((error) => (
        dispatch(ForecastsActions.loadingFail(error.message))
      ))
  }
)
