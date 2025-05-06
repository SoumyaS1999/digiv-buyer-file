import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@/assets/font/bootstrap-font/bootstrap-icons.min.css";
import "@/assets/font/font-awsome/css-js/all.min.css";
import "@/assets/font/font-awsome/css-js/all.min.js";
import '@/assets/scss/main.scss'
import App from './App.jsx'
import Bootstrap from './components/Bootstrap.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bootstrap>
      <App />
    </Bootstrap>
  </StrictMode>,
)
