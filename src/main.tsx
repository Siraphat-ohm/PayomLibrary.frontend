import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import AppBar from './component/Navbar';
import { CartProvider } from './context/CartContext';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <AuthProvider>
      <CartProvider>
        <App/>
      </CartProvider>
    </AuthProvider>
  )