import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 20px 0;
  display: flex;
`

const Content = styled.div`
  display: flex;

  i {
    font-style: normal;
    padding: 0 5px;
    display: flex;
    align-items: center;
  }

  div {
    cursor: pointer;
  }
`

const Breadcrumb = ({ categories }) => (
  <Wrapper>
    {categories &&
      categories.map((category, index) => (
        <Content key={category.id}>
          {!!index && <i className="breadcrumb-chevron" />}
          <div>{category.name}</div>
        </Content>
      ))}
  </Wrapper>
)

export default Breadcrumb
