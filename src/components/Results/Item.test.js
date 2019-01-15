import React from 'react'
import { mount } from 'enzyme'
import Item from './Item'

jest.mock('react-router-dom', () => ({
  withRouter: component => component
}))
jest.mock('../../Context', () => ({
  Consumer: obj =>
    obj.children({
      setProductDetails: jest.fn()
    })
}))

describe('Item', () => {
  const history = {
    push: jest.fn()
  }
  const item = {
    picture: 'pictureUrl',
    price: {
      amount: 42
    },
    title: 'Rock!',
    address: {
      state_name: 'BA'
    }
  }

  it('should render', () => {
    const wrapper = mount(<Item item={item} history={history} />)
    expect(wrapper).toMatchSnapshot()
  })
})
