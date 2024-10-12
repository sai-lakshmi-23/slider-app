import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./styles/main.css"
import ScrollableSlider from './ScrollableSlider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <ScrollableSlider /> */}
  </StrictMode>,
)
