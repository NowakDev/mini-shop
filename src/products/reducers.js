import { FETCH_PRODUCTS } from '../products/constants'

const initialState = {
  products: [],
  product: {},
  basket: {}
}

const products = [
  { id: 1, name: 'one', description: 'product description1', price: 100 },
  { id: 2, name: 'two', description: 'product description2', price: 200 },
  { id: 3, name: 'three', description: 'product description3', price: 300 }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: products,
      }
    default:
      return state
  }
}
