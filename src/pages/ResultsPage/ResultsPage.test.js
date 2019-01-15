import React from 'react'
import { mount } from 'enzyme'
import ResultsPage from './ResultsPage'

jest.mock('../../Context', () => ({
  Consumer: obj =>
    obj.children({
      setSearchResponse: jest.fn(),
      searchResponse: {
        items: []
      }
    })
}))

const context = {
  setSearchResponse: jest.fn(),
  searchResponse: {
    items: [],
    filters: []
  }
}

ResultsPage.contextType = React.createContext(context)

describe('ResultsPage', () => {
  it('should render', () => {
    const wrapper = mount(<ResultsPage />)
    expect(wrapper).toMatchSnapshot()
  })
})
