import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
//import { shopContext } from './Context/context.jsx'
import { shopContext,MainProvider } from './Context/context.jsx'
export {shopContext};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <MainProvider>
    <App />
    </MainProvider>
    </BrowserRouter>
  </StrictMode>,
)
