import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Main from './components/Main/Main';
import Home from './pages/Home/Home';
import AllArtifacts from './pages/AllArtifacts/AllArtifacts';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './context/AuthContext/AuthProvider';
import AddArtifacts from './pages/AddArtifacts/AddArtifacts';
import PrivateRoute from './routes/PrivateRoute';
import MyArtifacts from './pages/MyArtifacts/MyArtifacts';
import LikedArtifacts from './pages/LikedArtifacts/LikedArtifacts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'allArtifacts',
        element: <AllArtifacts></AllArtifacts>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path:'addArtifacts',
        element: <PrivateRoute><AddArtifacts></AddArtifacts></PrivateRoute>
      },
      {
        path:'myArtifacts',
        element: <PrivateRoute><MyArtifacts></MyArtifacts></PrivateRoute>
      },
      {
        path:'likedArtifacts',
        element: <PrivateRoute><LikedArtifacts></LikedArtifacts></PrivateRoute>
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
