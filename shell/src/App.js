import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Header';

const Catalog = React.lazy(() => import("Catalog/Catalog"));
const Cart = React.lazy(() => import("Cart/Cart"));

const renderMFE = (MFE) => {
    return(
      <>
        <Header />
        <React.Suspense fallback="Loading...">
            <MFE />
        </React.Suspense>
      </>
    )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: renderMFE(Catalog),
  },
  {
    path: "/cart",
    element: renderMFE(Cart),
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  )
}

export default App
