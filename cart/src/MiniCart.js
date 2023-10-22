import React, {useState, useEffect} from 'react'

const App = () => {
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
   <div>product in cart: {counter}</div>
  )
}

export default App
