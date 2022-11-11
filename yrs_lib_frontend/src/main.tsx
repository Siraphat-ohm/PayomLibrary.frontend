import Cookies from 'js-cookie'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//Pages
import HomePage from './page/homePage'
import Login from './page/login'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={ Cookies.get("auth") ? <Navigate to="/home"/> : <Login/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
