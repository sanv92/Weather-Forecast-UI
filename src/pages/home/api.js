import { api } from 'lib/request-api'


export const forecastsApi = ({
  getTemperatureForPlaces: async () => (
    api.get('/forecasts/places/temperature')
  ),
})
