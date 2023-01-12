import { useEffect, useRef, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import instanceAxios from '../config/baseAxios'
import AppBar from './component/AppBar'

//Pages
import HistoryPage from './pages/historyPage'
import HomePage from './pages/homePage'
import ListPage from './pages/listPage'
import UploadPage from './pages/upload'


function App(){
    const navigate = useNavigate();
    const [username, setUsername] = useState();

    useEffect(() => {
        instanceAxios.get("/auth").then( res => {
            if(res.status == 204){
                navigate('/login')
            }
            setUsername(res.data.username)
        });
    }, [])

    return (
        <div >
            <AppBar name={username}/>
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