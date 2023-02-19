import { AppShell, Pagination } from '@mantine/core';
import { Navigate, Outlet } from 'react-router-dom';
import './App.css';
import { HeaderSearch } from './components/Header';
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
            header= {<HeaderSearch />}
        >
                <Outlet/>
            </AppShell>  
            :   
        <Navigate to="/login" replace={true}/>
        )
}
