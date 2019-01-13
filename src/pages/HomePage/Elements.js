import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  overflow: hidden;

  img {
    margin: -2px 0;
  }
`

export const CenteredImage = styled.div`
  width: 100%;
  height: ${props => props.height || '100%'};
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
  background-position: center;
`
