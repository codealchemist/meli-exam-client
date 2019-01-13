import React from 'react'
import logo from './logo.png'
import Search from '../Search'
import { Wrapper, Content, Spacer } from './Elements'

const Header = () => (
  <Wrapper>
    <Content>
      <img src={logo} alt="MELI logo" />
      <Spacer />
      <Search />
    </Content>
  </Wrapper>
)
export default Header
