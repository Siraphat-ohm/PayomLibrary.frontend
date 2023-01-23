import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { AuthProvider } from './client/context/AuthContext';
import { CartProvider } from './client/context/CartContext';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <AuthProvider>
      <CartProvider>
        <App/>
      </CartProvider>
    </AuthProvider>
  )