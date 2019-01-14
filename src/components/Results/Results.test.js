import React from 'react'
import { mount } from 'enzyme'
import Results from './Results'

jest.mock('./Item', () => 'div')

describe('Results', () => {
  it('should render without items', () => {
    const items = []
    const wrapper = mount(<Results items={items} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render with items', () => {
    const items = [{ id: 42, name: 'rock' }]
    const wrapper = mount(<Results items={items} />)
    expect(wrapper).toMatchSnapshot()
  })
})
