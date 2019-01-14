import React from 'react'
import { mount } from 'enzyme'
import Icon from './Icon'

describe('Icon', () => {
  it('should render', () => {
    const wrapper = mount(<Icon />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render with type', () => {
    const type = 'rock'
    const wrapper = mount(<Icon type={type} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render with custom background', () => {
    const background = 'black'
    const wrapper = mount(<Icon background={background} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should pass onClick', () => {
    const onClick = jest.fn()
    const wrapper = mount(<Icon onClick={onClick} />)
    expect(wrapper).toMatchSnapshot()

    wrapper.simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})
