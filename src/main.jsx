import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FavoriteProvider } from './context/FavoriteContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoriteProvider>
      <App />
    </FavoriteProvider>
  </StrictMode>,
)
 