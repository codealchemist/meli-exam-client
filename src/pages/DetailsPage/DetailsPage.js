import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Context from '../../Context'
import { getCategory as getCategoryApi } from '../../api'
import ProductDetails from '../../components/ProductDetails'
import { getProductDetails as getProductDetailsApi } from '../../api'
import { Wrapper, Content } from './Elements'

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
    const { category_id } = this.context.productDetails.item
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
