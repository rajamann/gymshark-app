import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'

test('renders navbar items correctly', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(getByText('Home')).toBeInTheDocument()
  expect(getByText('Male')).toBeInTheDocument()
  expect(getByText('Female')).toBeInTheDocument()
})
