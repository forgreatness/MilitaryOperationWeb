import { useState } from 'react'
import { Routes, Route, useRoutes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HomePage from './pages/HomePage';
import ContextAPIArticleComponent from './concept-practices/context-api/ContextAPIPractice2/ContextAPIArticleComponent';
import { AuthProvider } from './hooks/useAuth';
import { ProfilePage } from './pages/ProfilePage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { LoginPage } from './pages/LoginPage';
import Verify2FAPage from './pages/Verify2FAPage';

// export const HomePage = () => {
//   return (
//     <div id="home-page">
//       <h2>This is Danh's Military Operation</h2>
//     </div>
//   )
// }

function App() {
  const [count, setCount] = useState(0)

  return (
    // The AuthProvider is added here so that the useAuth context can be use within any protectedRoutes
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={
          <ProtectedRoute>
            <LoginPage />
          </ProtectedRoute>
        } />
        <Route path="/verify-2fa" element={
          <ProtectedRoute>
            <Verify2FAPage />
          </ProtectedRoute>
        } />
        <Route path="/contextAPIComponent" element={<ContextAPIArticleComponent />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        } />
      </Routes>
    </AuthProvider>
    // Routes is like the switch statement  
  )
}

function App2() {
  const routes = useRoute([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/login",
      element: <LoginPage />
    }
  ]);

  return routes;
}

export default App
