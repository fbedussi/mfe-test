import React from 'react'
import {Link} from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <div><Link to={`product/1`}>Product 1</Link></div>
      <div><Link to={`product/2`}>Product 2</Link></div>
    </div>
  )
}

export default Products
