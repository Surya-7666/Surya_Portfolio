import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import SliderProvider from './context/SliderProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SliderProvider>
      <BrowserRouter>
        <Toaster position='bottom-center' />
        <App />
      </BrowserRouter>
    </SliderProvider>
  </StrictMode>,
)
