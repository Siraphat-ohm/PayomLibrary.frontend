import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { SocketProvider } from './context/SocketContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <AuthProvider>
      <SocketProvider>
        <CartProvider>
          <App/>
        </CartProvider>
      </SocketProvider>
    </AuthProvider>
  )