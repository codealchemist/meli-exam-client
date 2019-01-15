import React from 'react'
import { mount } from 'enzyme'
import HomePage from './HomePage'

describe('HomePage', () => {
  it('should render', () => {
    const wrapper = mount(<HomePage />)
    expect(wrapper).toMatchSnapshot()
  })
})
