import React from 'react'
import { mount } from 'enzyme'
import Breadcrumb from './Breadcrumb'

describe('Breadcrumb', () => {
  it('should render empty component', () => {
    const categories = []
    const wrapper = mount(<Breadcrumb categories={categories} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render breadcrumbs', () => {
    const categories = [
      { id: 42, name: 'The answer to everything' },
      { id: 86, name: 'Maxwell Smart' }
    ]
    const wrapper = mount(<Breadcrumb categories={categories} />)
    expect(wrapper).toMatchSnapshot()
  })
})
