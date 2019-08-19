import React, { Fragment } from 'react'

import Product from '../components/Product'

class ProductsList extends React.Component {
  state = {
    data: {
      name: 'one',
      description: 'product description',
      price: '1000 pln'
    }
  }

  render() {
    return (
      <Fragment>
        <Product data={this.state.data} />
        <Product data={this.state.data} />
        <Product data={this.state.data} />
      </Fragment>
    )
  }
}

export default ProductsList
