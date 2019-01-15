import React from 'react'
import { Wrapper, ContentWrapper, Content } from './Elements'

const Breadcrumb = ({ categories }) => (
  <Wrapper>
    <ContentWrapper>
      {categories &&
        categories.map((category, index) => (
          <Content key={category.id}>
            {!!index && <i className="breadcrumb-chevron" />}
            <div>{category.name}</div>
          </Content>
        ))}
    </ContentWrapper>
  </Wrapper>
)

export default Breadcrumb
