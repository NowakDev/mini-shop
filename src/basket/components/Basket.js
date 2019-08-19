import React from 'react'

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


export default Basket
