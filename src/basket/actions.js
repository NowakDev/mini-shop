import { ADD_PRODUCTS } from './constants'

export const addProducts = (product) => ({
  type: ADD_PRODUCTS,
  payload: product
})
