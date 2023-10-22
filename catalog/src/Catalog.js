import React from 'react'
import Home from './Home'
import Product from './Product'
import {Routes, Route, useLocation} from 'react-router-dom'


const App = () => {
  const location = useLocation()
  const path = location.pathname.split('/')[1]

  return (
   <div>
      <h1>Catalog</h1>
      <Routes>
        <Route path={`${path}/product/:id`} element={<Product />} />
        <Route path={`${path}`} element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
