import styled from 'styled-components'
import Colors from '../Colors'

export const Wrapper = styled.div`
  width: 100%;
  height: 56px;
  background: ${Colors.brand.main};
  display: flex;

  img {
    height: 32px;
  }
`

export const Content = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
`

export const Spacer = styled.div`
  width: 20px;
`
