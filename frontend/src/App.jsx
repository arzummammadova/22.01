import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Add from './pages/Add';
import Basket from './pages/Basket';
import NotFoundPage from './pages/NotFoundPage';
import Details from './pages/Details';
const App = () => {


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/add',
        element: <Add />,
      },
        {
        path: '/basket',
        element: <Basket />,
      },
      {
        path: '/details/:id',
        element: <Details />,
      },
    ],
    
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
return <RouterProvider router={router} />;

}

export default App
