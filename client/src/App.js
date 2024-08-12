import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Partners from './pages/Partners';
import AboutUs from './AboutUs';
import SignUp from './pages/SignUp';
import Login from './pages/login';
import ErrorPage from './pages/ErrorPage';
import Opportunities from './components/EmploymentList';
import Associations from './pages/Associations';
import Funding from './pages/Funding';
import ApplicationForm from './components/ApplicationForm'; // Import ApplicationForm

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
    path: '/Login',
    element: <Login />,
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
  },
  {
    path: '/applications/:employmentId', // Add route for ApplicationForm
    element: <ApplicationForm />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
