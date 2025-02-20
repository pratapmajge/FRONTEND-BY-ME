import React  from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowseRouter} from 'react-router-dom'
import ReactDom from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowseRouter>
      <App />
    </BrowseRouter>
  </React.StrictMode>,
)
