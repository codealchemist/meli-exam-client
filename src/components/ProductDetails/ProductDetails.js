import React from 'react'
import CurrencyFormat from 'react-currency-format'
import Context from '../../Context'
import {
  Wrapper,
  TopWrapper,
  ImageWrapper,
  BuyWrapper,
  BottomWrapper,
  Image,
  Content
} from './Elements'

const ProductDetails = () => (
  <Wrapper>
    <Context.Consumer>
      {context => (
        <>
          <TopWrapper>
            <ImageWrapper>
              <Image src={context.productDetails.item.picture} />
            </ImageWrapper>
            <BuyWrapper>
              <label>
                {context.productDetails.item.condition} -{' '}
                {context.productDetails.item.sold_quantity} vendidos
              </label>
              <h2>{context.productDetails.item.title}</h2>
              <h1>
                <CurrencyFormat
                  displayType="text"
                  prefix={'$'}
                  thousandSeparator="."
                  decimalSeparator=","
                  value={context.productDetails.item.price.amount}
                />
              </h1>
              <button>Comprar</button>
            </BuyWrapper>
          </TopWrapper>
          <BottomWrapper>
            <Content>
              <h3>Descripción del producto</h3>
              <pre>{context.productDetails.item.description}</pre>
            </Content>
          </BottomWrapper>
        </>
      )}
    </Context.Consumer>
  </Wrapper>
)

export default ProductDetails
