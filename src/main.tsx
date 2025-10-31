import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { BookingProvider } from './Context/BookingContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <BookingProvider>
      <App />
      </BookingProvider>
    </BrowserRouter>
    
  </React.StrictMode>
)
