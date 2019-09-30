import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { IconDay } from '../icon-day'


describe('<IconDay />', () => {

  test('should render with default props', () => {
    const icon = shallow(<IconDay />)

    expect(icon).toBeDefined()
    expect(icon).toMatchSnapshot()
  })

})
