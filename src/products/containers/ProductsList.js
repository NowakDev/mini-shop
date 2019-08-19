import React, { Fragment } from 'react'

import Product from '../components/Product'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions'


const mapStateToProps = (state, ownProps) => ({
  myProducts: state.products.products,
  isUser: ownProps.isUser
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts())
})

class ProductsList extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <Fragment>
        {this.props.myProducts.map((product, index) => (
          <Product key={`prod-${index}`} data={product} />
        ))}
      </Fragment>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList)
