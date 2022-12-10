import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './app'
import Login from './page/login'

//Pages

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<App/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
