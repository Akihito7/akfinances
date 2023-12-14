import React from 'react'
import ReactDOM from 'react-dom/client'

import { Home } from './pages/Home'
import './index.css'
import { Register } from './pages/Register'
import { Resume } from './pages/Resume'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>,
)
