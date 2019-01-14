import React from 'react'
import { mount } from 'enzyme'
import ProductDetails from './ProductDetails'

jest.mock('../../Context', () => ({
  Consumer: obj =>
    obj.children({
      productDetails: {
        item: {
          picture: 'image-url',
          condition: 'new',
          sold_quantity: 86,
          title: 'Rock',
          price: {
            amount: 42
          },
          description: 'Description.'
        }
      }
    })
}))

describe('ProductDetails', () => {
  it('should render', () => {
    const wrapper = mount(<ProductDetails />)
    expect(wrapper).toMatchSnapshot()
  })
})
