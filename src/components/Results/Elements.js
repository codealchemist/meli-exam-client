import styled from 'styled-components'
import Colors from '../Colors'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  cursor: pointer;
  animation: all 2x;

  :hover {
    border-bottom: 1px solid ${Colors.brand.main};
  }

  label {
    position: absolute;
    top: 40px;
    right: 40px;
  }
`

export const LeftWrapper = styled.div`
  width: 160px;
  margin: auto;
  text-align: center;
  padding: 0 10px;

  img {
    border-radius: 4px;
  }
`

export const RightWrapper = styled.div`
  width: 100%;

  h3 {
    font-size: 24px;
    margin-bottom: 0;
  }

  p {
    font-size: 20px;
  }
`
