import React from 'react'
import ReactDOM from 'react-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={"/<mgitoqabuskanz.github.io>/"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
