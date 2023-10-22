import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div><Link to="/catalog">catalog</Link> <Link to="/cart">cart</Link> </div>
  )
}

export default Header
