import React from 'react'
import styled from 'styled-components'
import Colors from '../Colors'

const Wrapper = styled.div`
  width: 46px;
  height: 39px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 21px;
  color: ${Colors.default.dark2};
  background: ${props => props.background || 'transparent'};

  i {
    font-style: normal;
    width: 100%;
    text-align: center;
    margin-top: 4px;
  }
`

const Icon = ({ type, background, onClick }) => (
  <Wrapper background={background} onClick={onClick}>
    <i className={type} />
  </Wrapper>
)

export default Icon
