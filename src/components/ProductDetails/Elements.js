import styled from 'styled-components'
import Colors from '../Colors'

export const Wrapper = styled.div`
  width: 100%;
  background: ${Colors.default.light1};
  padding: 20px;
`

export const TopWrapper = styled.div`
  display: flex;
  padding: 20px;
`

export const ImageWrapper = styled.div`
  flex: 1;
  text-align: center;
`

export const BottomWrapper = styled.div`
  width: 100%;
`

export const BuyWrapper = styled.div`
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
