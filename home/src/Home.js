import React, {useState, useEffect} from 'react'

const Home = ({children}) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const listener = (ev) => {
      console.log('Product id', ev.detail.id)
      setCounter(counter => counter + 1)
    }
    document.body.addEventListener("productAddedToCart", listener)

    return () => {
      document.body.removeEventListener("productAddedToCart", listener)
    }
  }, [])

  return (
    <div>
      <div>Home page</div>
      <div>product in cart: {counter}</div>
      {children}
    </div>
  )
}

export default Home
