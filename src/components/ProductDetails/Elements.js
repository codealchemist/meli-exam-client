import styled from 'styled-components'
import Colors from '../Colors'

export const Wrapper = styled.div`
  width: 100%;
  background: ${Colors.default.light1};
`

export const TopWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  max-width: 300px;
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

export const Image = styled.div`
  background: url(${props => props.src}) no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 350px;
  margin: auto;
`

export const Content = styled.div`
  padding: 20px;

  pre {
    font-family: 'Proxima Nova';
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`
