import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
