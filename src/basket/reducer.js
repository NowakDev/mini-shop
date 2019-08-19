import { ADD_PRODUCTS } from './constants'

const initialState = {
  products: [] //{name, quantity, price}
}



export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      const product = {
        id: action.payload.id,
        name: action.payload.name,
        quantity: 1,
        price: action.payload.price
      }
      const newProducts = [...state.products];
      const productIndex = newProducts.findIndex((element) => element.id === product.id)

      if (productIndex === -1) {
        return {
          ...state,
          products: state.products.concat(product)
        }
      } else {
        const modifiedProduct = newProducts[productIndex]
        newProducts[productIndex] = { ...modifiedProduct, quantity: modifiedProduct.quantity + 1 }
        return {
          ...state,
          products: newProducts
        }
      }

    default:
      return state
  }
}
