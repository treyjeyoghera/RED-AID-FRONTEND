import React from 'react';
import reactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Partners from './pages/Partners';
import AboutUs from './AboutUs';
import SignUp from './pages/SignUp';
import ErrorPage from './pages/ErrorPage';
import Opportunities from './pages/Opportunities';
import Associations from './pages/Associations';
import Funding from './pages/Funding';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/Partners',
    element: <Partners />,
  },
  {
    path: '/Signup',
    element: <SignUp />,
  },
  {
    path: '/Home',
    element: <HomePage />,
  },
  {
    path: '/Associations',
    element: <Associations />,
  },
  {
    path: '/Opportunities',
    element: <Opportunities />,
  },
  {
    path: '/Funding',
    element: <Funding />,
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
