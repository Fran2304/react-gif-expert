import React from 'react'
import ReactDOM from 'react-dom/client'
import { Prueba1 } from './Prueba1'
import { GifExpertApp } from './GifExpertApp'
import './styles.css'
// React.StrictMode: ayudaa indentifcar problema de lyfeccycle, detectar muchas cosas. solo pasa en desarrollo. Se recomienda que no se quite

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <GifExpertApp />
  //  </React.StrictMode>
)
