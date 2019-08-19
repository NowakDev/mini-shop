import { FETCH_PRODUCTS } from '../products/constants'

const initialState = {
  products: [],
  product: {},
  basket: {}
}

const products = [
  { name: 'one', description: 'product description1', price: '100 pln' },
  { name: 'two', description: 'product description2', price: '200 pln' },
  { name: 'three', description: 'product description3', price: '300 pln' }
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
