import React from 'react'
import { branch, renderComponent } from 'recompose'

import { Dimmer, Loader } from 'semantic-ui-react'

import { ContentTemplate } from 'ui/templates'

import { fetchStatus } from '../fetching-api'

/**
 *
 * @example:
 * branch((props) => isLoading(props.fetching), renderComponent(LoadingView)),
 * branch((props) => isFailed(props.fetching), renderComponent(ErrorView)),
 */
const SpinnerView = () => (
  <ContentTemplate>
    <Dimmer active inverted>
      <Loader inverted />
    </Dimmer>
  </ContentTemplate>
)

/**
 * @param {function} hasNoData
 * @returns {function(Function): *}
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
      renderComponent(SpinnerView),
    )
  }
)

/**
 * @param {fetchStatus} fetching
 * @param {function} hasNoData
 * @type {function(Function): *}
 */
export const loadingIfNoDataHOC = hideIf(({ fetching, hasNoData }) => {
  if (hasNoData) {
    return hasNoData
  }

  return fetching.status >= fetchStatus.initial && fetching.status <= fetchStatus.loading
})
