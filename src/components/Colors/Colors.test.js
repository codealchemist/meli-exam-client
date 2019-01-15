import React from 'react'
import Colors from './Colors'

describe('Colors', () => {
  it('should export brand colors', () => {
    const brandColors = {
      main: '#fff159'
    }
    expect(Colors.brand).toEqual(brandColors)
  })

  it('should export default colors palette', () => {
    const defaultColors = {
      light1: '#fff',
      light2: '#eee',
      dark1: '#333',
      dark2: '#666',
      dark3: '#000',
      primary: '#3483fa'
    }
    expect(Colors.default).toEqual(defaultColors)
  })
})
