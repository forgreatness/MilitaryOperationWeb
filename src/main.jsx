import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import { router } from './App.jsx';
import { ThemeContextProvider } from './concept-practices/context-api/ContextAPIComponent.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#3a34d2"
    }
  }
});
const appRootElement = document.getElementById("root");
const root = createRoot(appRootElement);

root.render(
  <StrictMode> {/* For Development purposes: enable identification of potential code problems in the children */}
    <ThemeProvider theme={appTheme}>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </ThemeProvider>
  </StrictMode>
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <ThemeContextProvider>
//         <App />
//       </ThemeContextProvider>
//     </BrowserRouter>
//   </StrictMode>,
// )
