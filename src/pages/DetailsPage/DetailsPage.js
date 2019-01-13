import React from 'react'
import styled from 'styled-components'
import Breadcrumb from '../../components/Breadcrumb'
import Context from '../../Context'
import { getCategory as getCategoryApi } from '../../api'
import ProductDetails from '../../components/ProductDetails'
import Colors from '../../components/Colors'
import { getProductDetails as getProductDetailsApi } from '../../api'

const Wrapper = styled.div`
  width: 100%;
  background: ${Colors.default.light2};
  padding-bottom: 40px;
`

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  background: ${Colors.default.light2};
  margin: auto;
`

class DetailsPage extends React.PureComponent {
  state = {
    searching: false
  }

  componentDidMount() {
    if (!this.context.productDetails) {
      const { params } = this.props.match
      this.getProductDetails(params.id)
      return
    }

    this.getCategory()
  }

  getProductDetails = id => {
    this.setState({ searching: true })
    getProductDetailsApi(id).then(response => {
      console.log('GOT product details response', response)
      this.context.setProductDetails(response)
      this.getCategory()
      this.setState({ searching: false })
    })
  }

  getCategory = () => {
    const { category_id } = this.context.productDetails.details
    getCategoryApi(category_id).then(categories => {
      console.log('got categories', categories)
      this.context.setProductCategories(categories)
    })
  }

  render() {
    return (
      <Context.Consumer>
        {context => {
          if (!context.productDetails) return null

          return (
            <Wrapper>
              <Content>
                <Breadcrumb
                  categories={context.productCategories.path_from_root}
                />
                <ProductDetails product={context.productDetails} />
              </Content>
            </Wrapper>
          )
        }}
      </Context.Consumer>
    )
  }
}

DetailsPage.contextType = Context
export default DetailsPage
