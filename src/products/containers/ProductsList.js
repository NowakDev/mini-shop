import React, { Fragment } from 'react'

import Product from '../components/Product'

class ProductsList extends React.Component {
  state = {

  }

  render() {
    return (
      <Fragment>
        <Product data={{ name: 'One', description: 'produkt', price: '111' }} />
        <Product data={{ name: 'One', description: 'produkt', price: '111' }} />
        <Product data={{ name: 'One', description: 'produkt', price: '111' }} />
      </Fragment>
    )
  }
}

export default ProductsList
