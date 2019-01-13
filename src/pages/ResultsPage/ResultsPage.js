import React from 'react'
import styled from 'styled-components'
import Results from '../../components/Results'
import Context from '../../Context'
import Colors from '../../components/Colors'
import Breadcrumb from '../../components/Breadcrumb'
import Empty from './Empty'
import { search as searchApi } from '../../api'

const Wrapper = styled.div`
  width: 100%;
  background: ${Colors.default.light2};
  padding-bottom: 40px;
`

class ResultsPage extends React.PureComponent {
  state = {
    searching: false
  }

  componentDidMount() {
    if (this.context.searchResponse) return

    const { location } = this.props
    const params = new URLSearchParams(location.search)
    const query = params.get('search')
    this.search(query)
  }

  search = query => {
    this.setState({ searching: true })
    searchApi(query).then(response => {
      console.log('SEARCH RESPONSE', response)
      this.context.setSearchResponse(response)
      this.setState({ searching: false })
    })
  }

  render() {
    return (
      <>
        {this.context.searchResponse && (
          <Wrapper>
            {!!this.context.searchResponse.filters.length && (
              <Breadcrumb
                categories={
                  this.context.searchResponse.filters[0].values[0]
                    .path_from_root
                }
              />
            )}
            <Results items={this.context.searchResponse.results || []} />
          </Wrapper>
        )}

        {!this.context.searchResponse && !this.state.searching && (
          <Empty title="Schrödinger's Cat is gone. Sorry." />
        )}
      </>
    )
  }
}

ResultsPage.contextType = Context
export default ResultsPage
