import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './app'
import Login from './pages/login'
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<App/>} />
      </Routes>
    </BrowserRouter>
)