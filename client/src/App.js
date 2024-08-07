import React from 'react';
import reactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Partners from './pages/Partners';
import AboutUs from './AboutUs';
import SignUp from './pages/SignUp';
import ErrorPage from './pages/ErrorPage';

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
