import React from 'react'

const WithLoader = ({children}) => {
  return (
    <React.Suspense fallback="Loading...">{children}</React.Suspense>
  )
}

export default WithLoader
