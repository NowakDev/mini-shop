import React from 'react'
import { connect } from 'react-redux'

import Basket from '../components/Basket'

class BasketContainer extends React.Component {
  render() {
    return (
      <div>
        <Basket data={this.props.products} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.basket.products
})


export default connect(
  mapStateToProps
)(BasketContainer)
