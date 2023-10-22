import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Header from './Header'
import WithLoader from './WithLoader'


const Home = React.lazy(() => import("Home/Home"))
const FeaturedProduct = React.lazy(() => import("Catalog/FeaturedProduct"))
const Catalog = React.lazy(() => import("Catalog/Catalog"))
const Cart = React.lazy(() => import("Cart/Cart"))

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
      
        <Routes>
          <Route path="/catalog/*" element={<WithLoader><Catalog /></WithLoader>} />
          <Route path="/cart" element={<WithLoader><Cart /></WithLoader>} />
          <Route path="/" element={<WithLoader><Home>{<FeaturedProduct />}</Home></WithLoader>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
