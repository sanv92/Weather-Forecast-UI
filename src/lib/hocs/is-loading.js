import { fetchStatus } from '../fetching-api'

/**
 *
 * @param fetching
 * @return {boolean}
 */
export const isLoading = (fetching) => (
  [fetchStatus.loading, fetchStatus.initial].includes(fetching?.status)
)
