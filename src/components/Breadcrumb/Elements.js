import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 20px 0;
  display: flex;
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 10px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;

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
