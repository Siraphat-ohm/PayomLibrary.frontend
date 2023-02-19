import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { Root } from './root';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider withGlobalStyles withNormalizeCSS theme={
          { colorScheme: "dark" } }>
              <BrowserRouter>
                <Root/>
              </BrowserRouter>
  </MantineProvider>
  )