import React from 'react'
import styled from 'styled-components'
import noResults from './empty-box.gif'

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  padding: 50px 0;
  margin: auto;

  h1 {
    margin: 0;
    font-weight: lighter;
  }
`

const Empty = ({ title }) => (
  <Wrapper>
    <img src={noResults} alt="No results" />
    <h1>{title}</h1>
  </Wrapper>
)

export default Empty
