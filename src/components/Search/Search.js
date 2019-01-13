import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import Colors from '../Colors'
import Icon from '../Icon'
import { search as searchApi } from '../../api'
import Context from '../../Context'

const Wrapper = styled.div`
  flex: 1;
  position: relative;

  input {
    height: 39px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    padding: 7px 60px 9px 15px;
    border-radius: 2px;
    background-color: ${Colors.default.light1};
    border: 0 rgba(0, 0, 0, 0.2);
    color: ${Colors.default.dark1};
    font-size: 16px;
    width: 100%;
    margin: 0;
  }
`

class Search extends React.PureComponent {
  state = {
    query: null
  }

  search = context => {
    console.log('SEARCH context', context)
    searchApi(this.state.query).then(response => {
      console.log('SEARCH RESPONSE', response)
      context.setSearchResponse(response)

      // Redirect to Results Page.
      const { history } = this.props
      history.push(`/items?search=${this.state.query}`)
    })
  }

  onChange = (e, context) => this.setState({ query: e.target.value })

  onKey = ({ key }, context) => {
    if (key !== 'Enter') return
    this.search(context)
  }

  render() {
    return (
      <Context.Consumer>
        {context => (
          <Wrapper>
            <input
              type="search"
              placeholder="Buscar productos, marcas y más..."
              maxLength="120"
              autoFocus
              onChange={e => this.onChange(e, context)}
              onKeyPress={e => this.onKey(e, context)}
            />
            <Icon
              type="nav-icon-search"
              background={Colors.default.light2}
              onClick={() => this.search(context)}
            />
          </Wrapper>
        )}
      </Context.Consumer>
    )
  }
}

export default withRouter(Search)
