import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../Colors'
import { getProductDetails } from '../../api'
import Context from '../../Context'

const Wrapper = styled.div`
  display: flex;
  position: relative;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  cursor: pointer;
  animation: all 2x;

  :hover {
    border-bottom: 1px solid ${Colors.brand.main};
  }

  label {
    position: absolute;
    top: 40px;
    right: 40px;
  }
`

const LeftWrapper = styled.div`
  width: 160px;
  margin: auto;
  text-align: center;
  padding: 0 10px;

  img {
    border-radius: 4px;
  }
`

const RightWrapper = styled.div`
  width: 100%;

  h3 {
    font-size: 24px;
    margin-bottom: 0;
  }

  p {
    font-size: 20px;
  }
`

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
          <img src={item.thumbnail} alt="Product" />
        </LeftWrapper>

        <RightWrapper>
          <h3>$ {item.price}</h3>
          <p>{item.title}</p>
        </RightWrapper>

        <label>{item.address.state_name}</label>
      </Wrapper>
    )}
  </Context.Consumer>
)

export default withRouter(Item)
