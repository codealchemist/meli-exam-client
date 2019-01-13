import React from 'react'
import Context from '../../Context'
import {
  Wrapper,
  TopWrapper,
  ImageWrapper,
  BuyWrapper,
  BottomWrapper
} from './Elements'

const ProductDetails = () => (
  <Wrapper>
    <Context.Consumer>
      {context => (
        <>
          <TopWrapper>
            <ImageWrapper>
              <img src={context.productDetails.item.picture} alt="Product" />
            </ImageWrapper>
            <BuyWrapper>
              <label>
                {context.productDetails.item.condition} -{' '}
                {context.productDetails.item.sold_quantity} vendidos
              </label>
              <h2>{context.productDetails.item.title}</h2>
              <h1>$ {context.productDetails.item.price.amount}</h1>
              <button>Comprar</button>
            </BuyWrapper>
          </TopWrapper>
          <BottomWrapper>
            <h3>Descripción del producto</h3>
            <p>{context.productDetails.item.description}</p>
          </BottomWrapper>
        </>
      )}
    </Context.Consumer>
  </Wrapper>
)

export default ProductDetails
