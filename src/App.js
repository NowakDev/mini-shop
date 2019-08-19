import React from 'react'
import ProductsList from './products/containers/ProductsList';

import { Provider } from 'react-redux'
import store from './store'

const App = props => {
  return (
    <div>
      <Provider store={store}>
        <ProductsList isUser={true} />
      </Provider>
    </div>
  )
}

export default App
