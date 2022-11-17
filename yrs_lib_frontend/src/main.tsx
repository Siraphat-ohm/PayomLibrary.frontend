import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HistoryPage from './page/historyPage'

//Pages
import HomePage from './page/homePage'
import ListPage from './page/listPage'
import Login from './page/login'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/list' element={<ListPage/>}/>
          <Route path='/history' element={<HistoryPage/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
