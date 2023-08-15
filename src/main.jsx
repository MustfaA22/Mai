import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import './i18n.jsx'
import i18next from 'i18next'
const lang = localStorage.getItem("lang") || "ar";
i18next.changeLanguage(lang);
document.documentElement.lang = lang;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  Aos.init()
)
