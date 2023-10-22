import React from 'react'
import {useParams} from 'react-router-dom'

const Product = (props) => {
  const params = useParams()

  return (
    <div>
      <h2>Product {props.id || params.id}</h2>
    </div>
  )
}

export default Product
