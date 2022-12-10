import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import instanceAxios from '../config/baseAxios'

//Pages
import HistoryPage from './page/historyPage'
import HomePage from './page/homePage'
import ListPage from './page/listPage'
import UploadPage from './page/upload'


function App(){
    const navigate = useNavigate()
    useEffect(() => {
        instanceAxios.get("/auth").then( res => {
            if(res.status == 204){
                navigate('/login')
            }
        });
    }, [])

    return (
        <div>
            <Routes>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/history' element={<HistoryPage/>}/>
                <Route path='/list' element={<ListPage/>}/>
                <Route path='/newbook' element={<UploadPage/>} />
                <Route path='*' element={<div><h1>หาไม่เจอหรือเธอไม่มี</h1></div>} />
            </Routes>
        </div>
    )    
}

export default App;