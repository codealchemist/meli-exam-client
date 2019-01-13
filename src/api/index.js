const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000'

export const search = query => {
  console.log('API SEARCH', query)
  return window
    .fetch(`${baseUrl}/api/items?q=${query}`)
    .then(res => res.json())
    .catch(err => {
      console.error('Unable search items', err)
    })
}

export const getProductDetails = id => {
  console.log('API get product details', id)
  return window
    .fetch(`${baseUrl}/api/items/${id}`)
    .then(res => res.json())
    .catch(err => {
      console.error('Unable get item details', err)
    })
}

export const getCategory = id => {
  console.log('API get category', id)
  return window
    .fetch(`${baseUrl}/api/categories/${id}`)
    .then(res => res.json())
    .catch(err => {
      console.error('Unable to get category', err)
    })
}
