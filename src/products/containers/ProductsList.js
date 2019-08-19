import React, { Fragment } from 'react'

import Product from '../components/Product'
const products = [
  { name: 'one', description: 'product description1', price: '100 pln' },
  { name: 'two', description: 'product description2', price: '200 pln' },
  { name: 'three', description: 'product description3', price: '300 pln' }
]

class ProductsList extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    this.setState({
      products: products
    })
  }

  render() {
    return (
      <Fragment>
        {this.state.products.map((product, index) => (
          <Product key={`prod-${index}`} data={product} />
        ))}
      </Fragment>
    )
  }
}

export default ProductsList
