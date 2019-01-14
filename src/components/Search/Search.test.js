import React from 'react'
import { mount } from 'enzyme'
import Search from './Search'

// Turn off console log.
global.console = { log: jest.fn() }

jest.mock('../Icon', () => 'div')
jest.mock('react-router-dom', () => ({
  withRouter: component => component
}))
jest.mock('../../Context', () => ({
  Consumer: obj =>
    obj.children({
      setSearchResponse: jest.fn()
    })
}))
jest.mock('../../api', () => ({
  search: () => ({
    then: callback => callback('METAL')
  })
}))

describe('Search', () => {
  it('should render', () => {
    const wrapper = mount(<Search />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should update query', () => {
    const wrapper = mount(<Search />)
    const instance = wrapper.instance()
    instance.setState = jest.fn()
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'Yeah!' } })
    expect(instance.setState).toHaveBeenCalledWith({ query: 'Yeah!' })
  })

  it('should search', () => {
    const history = {
      push: jest.fn()
    }
    const wrapper = mount(<Search history={history} />)
    const instance = wrapper.instance()
    instance.setState = jest.fn()
    instance.state.query = 'Yes sir.'

    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'Yeah!' } })
    input.simulate('keypress', { key: 'Enter' })
    expect(history.push).toHaveBeenCalledWith('/items?search=Yes sir.')
  })

  it('should set search response on context', () => {
    const history = {
      push: jest.fn()
    }
    const wrapper = mount(<Search history={history} />)
    const instance = wrapper.instance()
    instance.state.query = 'Dude'

    const context = {
      setSearchResponse: jest.fn()
    }
    instance.search(context)
    expect(context.setSearchResponse).toHaveBeenCalledWith('METAL')
  })
})
