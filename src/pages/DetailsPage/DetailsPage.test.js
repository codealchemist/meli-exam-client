import React from 'react'
import { mount } from 'enzyme'
import DetailsPage from './DetailsPage'
import * as api from '../../api'

// Turn off console log.
// global.console = { log: jest.fn() }

jest.mock('../../Context', () => ({
  Consumer: obj =>
    obj.children({
      productDetails: {},
      productCategories: {
        path_from_root: []
      }
    })
}))
// jest.mock('../../api', () => ({
//   getProductDetails: () => ({
//     then: callback => callback({ id: 42 })
//   }),
//   getCategory: () => ({
//     then: callback => callback({ name: 'awesome-category' })
//   })
// }))
jest.mock('../../components/Breadcrumb', () => 'div')
jest.mock('../../components/ProductDetails', () => 'div')

const context = {
  setProductDetails: jest.fn(),
  setProductCategories: jest.fn(),
  productDetails: {
    item: {
      category_id: 7
    }
  },
  productCategories: {
    path_from_root: []
  }
}
DetailsPage.contextType = React.createContext(context)

describe('DetailsPage', () => {
  it('should render', () => {
    const match = {
      params: {
        id: 99
      }
    }
    const wrapper = mount(<DetailsPage match={match} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should get category', () => {
    jest.spyOn(api, 'getCategory')
    const wrapper = mount(<DetailsPage />)
    expect(api.getCategory).toHaveBeenCalledWith(7)
  })

  xit('should setProductCategories', () => {
    jest.spyOn(api, 'getCategory')
    jest.spyOn(context, 'setProductCategories')
    api.getCategory.mockReturnValue(Promise.resolve([1, 2]))
    const wrapper = mount(<DetailsPage />)
    expect(context.setProductCategories).toHaveBeenCalled()
  })

  it('should get product details', () => {
    const context = {
      setProductDetails: jest.fn(),
      setProductCategories: jest.fn(),
      productDetails: null,
      productCategories: {
        path_from_root: []
      }
    }
    DetailsPage.contextType = React.createContext(context)

    const match = {
      params: {
        id: 99
      }
    }
    jest.spyOn(api, 'getProductDetails')
    api.getProductDetails.mockReturnValue(Promise.resolve({ name: 'Cool!' }))
    const wrapper = mount(<DetailsPage match={match} />)
    expect(api.getProductDetails).toHaveBeenCalledWith(99)
  })

  xit('should set product details', () => {
    const context = {
      setProductDetails: jest.fn(),
      setProductCategories: jest.fn(),
      productDetails: null,
      productCategories: {
        path_from_root: []
      }
    }
    DetailsPage.contextType = React.createContext(context)

    const match = {
      params: {
        id: 99
      }
    }
    jest.spyOn(api, 'getProductDetails')
    jest.spyOn(context, 'setProductDetails')
    api.getProductDetails.mockReturnValue(Promise.resolve({ name: 'Cool!' }))
    const wrapper = mount(<DetailsPage match={match} />)
    expect(context.setProductDetails).toHaveBeenCalledWith()
  })
})
