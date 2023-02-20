import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { Root } from './root';
import "./App.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <MantineProvider withGlobalStyles withNormalizeCSS>
                <BrowserRouter>
                  <Root/>
                </BrowserRouter>
    </MantineProvider>
  )