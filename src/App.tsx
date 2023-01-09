import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from '@/store'

import RouteElement from './router'

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <RouteElement></RouteElement>
      </BrowserRouter>
    </Provider>
  )
}

export default App
