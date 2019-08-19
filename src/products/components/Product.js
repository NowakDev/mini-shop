import React from 'react'

const Product = props => {
  return (
    <div>
      <p>{props.data.name}</p>
      <p>{props.data.description}</p>
      <p>{props.data.price}</p>
    </div>
  )
}

export default Product
