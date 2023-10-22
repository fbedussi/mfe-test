import React from 'react'
import {Link} from 'react-router-dom'
import WithLoader from './WithLoader'

const MiniCart = React.lazy(() => import("Cart/MiniCart"));


const Header = () => {
  return (
    <div>
      <div><Link to="/">home</Link> <Link to="/catalog">catalog</Link> <Link to="/cart">cart</Link> </div>

      <WithLoader><MiniCart /></WithLoader>
    </div>
  )
}

export default Header
