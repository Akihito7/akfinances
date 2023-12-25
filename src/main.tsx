import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Routes } from './routes'
import { AuthContextProvider } from './Contexts/AuthContext'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  </React.StrictMode>,
)
