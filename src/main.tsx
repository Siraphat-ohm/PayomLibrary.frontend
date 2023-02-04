import ReactDOM from 'react-dom/client'
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <AuthProvider>
        <CartProvider>
          <App/>
        </CartProvider>
    </AuthProvider>
  </MantineProvider>
  )