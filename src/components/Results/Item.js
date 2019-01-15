import React from 'react'
import { withRouter } from 'react-router-dom'
import { getProductDetails } from '../../api'
import Context from '../../Context'
import { Wrapper, LeftWrapper, RightWrapper, PriceRow } from './Elements'

const openDetails = ({ item, history, context }) => {
  const { id } = item
  console.log('Open Details', item)

  getProductDetails(id).then(response => {
    console.log('GOT product details response', response)
    context.setProductDetails(response)

    // Redirect to Details Page.
    history.push(`/items/${id}`)
  })
}

const Item = ({ item, history }) => (
  <Context.Consumer>
    {context => (
      <Wrapper onClick={() => openDetails({ item, history, context })}>
        <LeftWrapper>
          <img src={item.picture} alt="Product" />
        </LeftWrapper>

        <RightWrapper>
          <PriceRow>
            <h3>$ {item.price.amount}</h3>
            <label>{item.address.state_name}</label>
          </PriceRow>
          <p>{item.title}</p>
        </RightWrapper>
      </Wrapper>
    )}
  </Context.Consumer>
)

export default withRouter(Item)
