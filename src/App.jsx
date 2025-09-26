import { useState } from 'react'
// import { Routes, Route, useRoutes } from 'react-router-dom';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HomePage from './pages/HomePage';
import ContextAPIArticleComponent from './concept-practices/context-api/ContextAPIPractice2/ContextAPIArticleComponent';
import { AuthProvider } from './hooks/useAuth';
import { ProfilePage } from './pages/ProfilePage';
import { ProtectedLayout } from './components/ProtectedPageLayout';
import { LoginPage } from './pages/LoginPage';
import { GeneralLayout } from './components/GeneralPageLayout';
import Verify2FAPage from './pages/Verify2FAPage';
import { AuthLayout } from './components/AuthLayout';
import CircularProgress from '@mui/material/CircularProgress';

// export const HomePage = () => {
//   return (
//     <div id="home-page">
//       <h2>This is Danh's Military Operation</h2>
//     </div>
//   )
// }

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    }, 3000)
  );

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />} loader={getUserData} HydrateFallback={CircularProgress}>
      <Route element={<GeneralLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-2fa" element={<Verify2FAPage />} /> 
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Route>
  )
);
// export function router() {
//   const getUserData = () => {
//     return new Promise((resolve) => {
//       return setTimeout(() => {
//         const user = window.localStorage.getItem("user");
//         resolve(user);
//       }, 3000);
//     });
//   }

//   return createBrowserRouter(
//     createRoutesFromElements(
//       <Route element={<AuthLayout />} loader={getUserData}>
//         <Route element={<GeneralLayout />}>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/verify-2fa" element={<Verify2FAPage />} /> 
//         </Route>

//         <Route path='/dashboard' element={<ProtectedLayout />}>
//           <Route path="profile" element={<ProfilePage />} />
//         </Route>
//       </Route>
//     )
//   );
// }

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     // The AuthProvider is added here so that the useAuth context can be use within any ProtectedLayout
//     <AuthProvider>
//       <Routes>
//         <Route element={<GeneralLayout />}>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={ <LoginPage /> } />
//           <Route path="/verify-2fa" element={<Verify2FAPage />} />
//         </Route>
//         <Route path="/dashboard" element={<ProtectedLayout />}>
//           <Route path="profile" element={<ProfilePage />} />
//         </Route>
//         {/* <Route path="/verify-2fa" element={
//           <ProtectedLayout>
//             <Verify2FAPage />
//           </ProtectedLayout>
//         } /> */}
//         {/* <Route path="/dashboard" element={<ProtectedLayout />}> */}
//           {/* <Route path="/contextAPIComponent" element={<ContextAPIArticleComponent />} /> */}
//           {/* <Route path="/profile" element={<ProfilePage />}/>
//         </Route> */}
//         {/* <Route path="/contextAPIComponent" element={<ContextAPIArticleComponent />} />
//         <Route path="/profile" element={
//           <ProtectedLayout>
//             <ProfilePage />
//           </ProtectedLayout>
//         } /> */}
//       </Routes>
//     </AuthProvider>
//     // Routes is like the switch statement  
//   )
// }

// function App2() {
//   const routes = useRoute([
//     {
//       path: "/",
//       element: <HomePage />
//     },
//     {
//       path: "/login",
//       element: <LoginPage />
//     }
//   ]);

//   return routes;
// }

// export default App
