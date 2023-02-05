import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Navbars } from './components/Navbars';

export function App() {
    return (
            <AppShell 
                padding="md"
                navbar={<Navbars/>}
            >
                <Outlet/>
            </AppShell>
            )
}
