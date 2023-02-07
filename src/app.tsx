import { AppShell } from '@mantine/core';
import { Navigate, Outlet } from 'react-router-dom';
import './App.css';
import { Navbars } from './components/Navbars';
import { useAuth } from './context/AuthContext';

export function App() {
    const { isAuthenticated } = useAuth();

    return (
        (isAuthenticated) ? 
        <AppShell 
            padding="md"
            navbar={<Navbars/>}
        >
                <Outlet/>
            </AppShell>  
            :   
        <Navigate to="/login" replace={true}/>
        )
}