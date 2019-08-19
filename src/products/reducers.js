const FETCH = 'products/FETCH'

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
    case FETCH:
      return {
        ...state,
        products: products,
      }
    default:
      return state
  }
}
