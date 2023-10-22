import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Header';

const Catalog = React.lazy(() => import("Catalog/Catalog"));
const Cart = React.lazy(() => import("Cart/Cart"));

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
      
        <Routes>
          <Route path="/cart" element={<React.Suspense fallback="Loading..."><Cart /></React.Suspense>} />
          <Route path="/*" element={<React.Suspense fallback="Loading..."><Catalog /></React.Suspense>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
