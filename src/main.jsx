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
// import AllArtifacts from './pages/AllArtifacts/AllArtifacts';
// import Registration from './pages/Registration/Registration';
// import Login from './pages/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
    //   {
    //     path: '/allArtifacts',
    //     element: <AllArtifacts></AllArtifacts>
    //   },
    //   {
    //     path: '/registration',
    //     element: <Registration></Registration>
    //   },
    //   {
    //     path: '/login',
    //     element: <Login></Login>
    //   },
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
