import React from 'react'
import { AuthProvider } from './Authentication/AuthProvider'
import Routes from './Authentication/Routes'


function App() {

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )

}

export default App