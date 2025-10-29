import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './frontend/App'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Suspense fallback={<div className='global-loader'>Chargement<span></span></div>}>
      <App />
    </Suspense>
  </BrowserRouter>,
)
