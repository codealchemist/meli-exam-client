import React from 'react'
import styled from 'styled-components'
import Colors from '../Colors'
import Context from '../../Context'

const Wrapper = styled.div`
  width: 100%;
  background: ${Colors.default.light1};
  padding: 20px;
`

const TopWrapper = styled.div`
  display: flex;
  padding: 20px;
`

const ImageWrapper = styled.div`
  flex: 1;
  text-align: center;
`

const BottomWrapper = styled.div`
  width: 100%;
`

const BuyWrapper = styled.div`
  width: 300px;
  text-transform: capitalize;

  button {
    background: ${Colors.default.primary};
    font-size: 15px;
    padding: 12px 16px;
    border: 1px solid ${Colors.default.primary};
    color: ${Colors.default.light1};
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
  }
`

const ProductDetails = () => (
  <Wrapper>
    <Context.Consumer>
      {context => (
        <>
          <TopWrapper>
            <ImageWrapper>
              <img
                src={context.productDetails.details.pictures[0].url}
                alt="Product"
              />
            </ImageWrapper>
            <BuyWrapper>
              <label>
                {context.productDetails.details.condition} -{' '}
                {context.productDetails.details.sold_quantity} vendidos
              </label>
              <h2>{context.productDetails.details.title}</h2>
              <h1>$ {context.productDetails.details.price}</h1>
              <button>Comprar</button>
            </BuyWrapper>
          </TopWrapper>
          <BottomWrapper>
            <h3>Descripción del producto</h3>
            <p>{context.productDetails.description.plain_text}</p>
          </BottomWrapper>
        </>
      )}
    </Context.Consumer>
  </Wrapper>
)

export default ProductDetails
