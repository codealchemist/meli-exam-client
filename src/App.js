import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'
import DetailsPage from './pages/DetailsPage'
import './App.css'
import Header from './components/Header'
import Context from './Context'

class App extends React.PureComponent {
  state = {
    query: '',
    searchResponse: null,
    productDetails: null,
    productCategories: [],
    setSearchResponse: searchResponse => this.setState({ searchResponse }),
    setProductDetails: productDetails => this.setState({ productDetails }),
    setProductCategories: productCategories =>
      this.setState({ productCategories })
  }

  render() {
    return (
      <Router>
        <Context.Provider value={this.state}>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/items" exact component={ResultsPage} />
          <Route path="/items/:id" component={DetailsPage} />
        </Context.Provider>
      </Router>
    )
  }
}

export default App
