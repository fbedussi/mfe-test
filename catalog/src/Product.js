import React from 'react'
import {useParams} from 'react-router-dom'

const Product = (props) => {
  const params = useParams()

  const id = props.id || params.id
  return (
    <div>
      <h2>Product {id}</h2>
      <button onClick={() => {
        document.body.dispatchEvent(new CustomEvent("productAddedToCart", {
          detail: {
            id
          }
        }))
      }}>Add to cart</button>
    </div>
  )
}

export default Product
