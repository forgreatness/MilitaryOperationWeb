import { useState } from 'react'
import { Routes, Route, useRoutes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HomePage from './pages/HomePage';
import ContextAPIArticleComponent from './concept-practices/ContextAPIPractice2/ContextAPIArticleComponent';

export const LoginPage = () => {
  return (
    <div>
      <h1>This is the Login Page</h1>
    </div>
  );
}

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
    // Routes is like the switch statement 
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contextAPIComponent" element={<ContextAPIArticleComponent />} />
    </Routes>
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
