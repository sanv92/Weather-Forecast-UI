import { branch, renderNothing } from 'recompose'


import { fetchStatus } from '../fetching-api'

/**
 *
 * @param hasNoData
 * @return {function(*=): Function}
 */
const hideIf = (hasNoData) => (
  /**
   * @param custom
   * @returns {*}
   */
  (custom) => {
    const fn = custom || hasNoData

    return branch(
      fn,
      renderNothing,
    )
  }
)

/**
 *
 * @type {function(*=): Function}
 */
export const hideIfNoDataHOC = hideIf((properties) => {
  const { fetching, hasNoData } = properties

  if (hasNoData) {
    return hasNoData
  }

  return fetching.status >= fetchStatus.initial && fetching.status <= fetchStatus.loading
})
