import React from 'react'
import { connect } from 'react-redux'

const Basket = props => {
  return (
    <div>
      {props.data.map((product, index) => (
        <div key={`basket-${index}`}>
          <span>{product.name}</span> {product.quantity} szt. {product.quantity * product.price}
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket)
