import React from 'react'
import Products from './Products'
import Product from './Product'
import {Routes, Route} from 'react-router-dom'


const App = () => {
  return (
   <div>
      <h1>Catalog</h1>
      <Routes>
        <Route path={`product/:id`} element={<Product />} />
        <Route index element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
