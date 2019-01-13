import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'
import './App.css'
import Header from './components/Header'
import Context from './Context'

class App extends React.PureComponent {
  state = {
    query: '',
    searchResponse: '',
    productId: null,
    setSearchResponse: searchResponse => this.setState({ searchResponse })
  }

  render() {
    return (
      <Router>
        <Context.Provider value={this.state}>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/items" component={ResultsPage} />
        </Context.Provider>
      </Router>
    )
  }
}

export default App
