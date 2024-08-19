import React, { useContext } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from './components/AuthContext'; // Import AuthContext
import HomePage from './pages/HomePage';
import Partners from './pages/Partners';
import AboutUs from './AboutUs';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import Opportunities from './pages/Opportunities';
import Associations from './pages/Associations';
import Funding from './pages/Funding';
import ApplicationForm from './components/ApplicationForm';
import UserProfile from './pages/UserProfile'; // Import UserProfile

const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = useContext(AuthContext); // Use AuthContext
  return isLoggedIn ? element : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/Partners',
    element: <ProtectedRoute element={<Partners />} />,
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
    element: <ProtectedRoute element={<HomePage />} />,
  },
  {
    path: '/Associations',
    element: <ProtectedRoute element={<Associations />} />,
  },
  {
    path: '/opportunities',
    element: <ProtectedRoute element={<Opportunities />} />,
  },
  {
    path: '/Funding',
    element: <ProtectedRoute element={<Funding />} />,
  },
  {
    path: '/applications/:employmentId',
    element: <ProtectedRoute element={<ApplicationForm />} />,
  },
  {
    path: '/profile/:user_id',
    element: < UserProfile />, // Add this route
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
};

export default App;
