import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
  margin:0px;
  padding:0px;
  box-sizing:border-box;
}
body{
  background-color:#323334;
  color:white;
  font-family: 'Inter',sans-serif;
  background: rgba(13, 13, 13, 0.76);
}
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <App />
    <GlobalStyle>
    </GlobalStyle>
  </React.StrictMode>,
)
