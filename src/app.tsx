import { AppShell } from '@mantine/core';
import { Navigate, Outlet } from 'react-router-dom';
import './App.css';
import { Navbars } from './components/Navbars';
import { NavbarsAdmin } from './components/NavbarsAdmin';
import { useAuth } from './context/AuthContext';

interface AppProps  {
    admin? : boolean
}

export const App = ( {admin = false} : AppProps ) => {
    const { isAuthenticated } = useAuth();

    return (
        (isAuthenticated) ? 
        <AppShell 
            padding="md"
            navbar={admin ? <NavbarsAdmin/> : <Navbars/>}
        >
                <Outlet/>
            </AppShell>  
            :   
        <Navigate to="/login" replace={true}/>
        )
}
