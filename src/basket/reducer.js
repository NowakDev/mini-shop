import { ADD_PRODUCTS } from './constants'

const initialState = {
  products: [] //{name, quantity, price}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        products: state.products.concat(action.payload)
      }
    default:
      return state
  }
}
