import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ButtonClick from './components/Button-Click/button-click.js'
import Navigation from "./components/Navbar/navbar";

const root = ReactDOM.createRoot(
    document.getElementById('root')
)

root.render(
  <React.StrictMode>
    <Navigation/>
    <ButtonClick content={"Click Here"}/>
  </React.StrictMode>
)
