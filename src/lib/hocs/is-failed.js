import { fetchStatus } from '../fetching-api'


/**
 *
 * @param fetching
 * @return {boolean}
 */
export const isFailed = (fetching) => (
  fetching.status === fetchStatus.failed
)
