import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';

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
    <ThemeProvider theme={appTheme}> {/* ThemeContextProvider is a component utilized from the material UI library which allows any component in application to apply theme style to component */}
      <ThemeContextProvider> {/* ThemeProvider is a component that calls the ThemeContext and provides it to the children component which based on the position of the ThemeProvider here, it will be available to all components in any route */}
        <RouterProvider router={router} /> {/* Expose the RouterProvider which is the createBrowserRouter object to the descentdent of the application so that they can add conditional route render */}
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
