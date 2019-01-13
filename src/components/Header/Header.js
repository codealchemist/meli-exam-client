import React from 'react'
import { withRouter } from 'react-router-dom'
import logo from './logo.png'
import Search from '../Search'
import { Wrapper, Content, Spacer } from './Elements'

const goHome = history => {
  history.push('/')
}

const Header = ({ history }) => (
  <Wrapper>
    <Content>
      <img src={logo} alt="MELI logo" onClick={() => goHome(history)} />
      <Spacer />
      <Search />
    </Content>
  </Wrapper>
)

export default withRouter(Header)
