import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./input.css"
//context
import ProductProvider from './Context/ProductContext.jsx'
import CartProvider from './Context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
  </CartProvider>

)
