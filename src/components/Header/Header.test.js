import React from 'react'
import { mount } from 'enzyme'
import Header from './Header'

jest.mock('react-router-dom', () => ({
  withRouter: component => component
}))

describe('Header', () => {
  it('should render', () => {
    const wrapper = mount(<Header />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should redirect to home page', () => {
    const history = {
      push: jest.fn()
    }
    const wrapper = mount(<Header history={history} />)
    const linkedElement = wrapper.find(Header).find('img')
    linkedElement.simulate('click')

    expect(history.push).toHaveBeenCalledWith('/')
  })
})
