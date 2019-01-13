const baseUrl = 'https://api.mercadolibre.com'

export const search = query => {
  console.log('API SEARCH', query)
  return window
    .fetch(`${baseUrl}/sites/MLA/search?q=${query}`)
    .then(res => res.json())
    .catch(err => {
      console.error('Unable search items', err)
    })
}

export const getProductDetails = id => {
  console.log('API get product details', id)
  const getDetails = window
    .fetch(`${baseUrl}/items/${id}`)
    .then(res => res.json())
  const getDescription = window
    .fetch(`${baseUrl}/items/${id}/description`)
    .then(res => res.json())

  return Promise.all([getDetails, getDescription])
    .then(([details, description]) => ({ details, description }))
    .catch(err => {
      console.error('Unable to get product details', err)
    })
}

export const getCategory = id => {
  console.log('API get category', id)
  return window
    .fetch(`${baseUrl}/categories/${id}`)
    .then(res => res.json())
    .catch(err => {
      console.error('Unable to get category', err)
    })
}
