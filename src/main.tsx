import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Routes } from './routes'
import { Signln } from './pages/Signln'
import { Signup } from './pages/Signup'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
