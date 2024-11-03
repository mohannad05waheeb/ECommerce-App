import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import StoreApp from './Store.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={StoreApp}> 
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider> 
  </StrictMode>,
)
