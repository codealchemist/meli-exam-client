import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Item from './Item'
import Colors from '../Colors'

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  background: ${Colors.default.light1};
  color: ${Colors.default.dark1};
`

const Results = ({ items }) => (
  <Wrapper>
    {items.map(item => (
      <Item key={item.id} item={item} />
    ))}
  </Wrapper>
)

Results.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({}))
}

Results.defultProps = {
  items: []
}

export default Results
