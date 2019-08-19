import React from 'react'
import ProductsList from './products/containers/ProductsList';

import { Provider } from 'react-redux'
import store from './store'
import BasketContainer from './basket/containers/BasketContainer';

const App = props => {
  return (
    <div>
      <Provider store={store}>
        <BasketContainer />
        <ProductsList isUser={true} />
      </Provider>
    </div>
  )
}

export default App
