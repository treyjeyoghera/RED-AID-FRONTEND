import React from 'react';
import reactDom from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Partners from './pages/Partners';
import AboutUs from './AboutUs';
import SignUp from './pages/SignUp';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AboutUs />,
  },
  {
    path: '/Partners',
    element: <Partners />,
  },
  {
    path: '/SignUp',
    element: <SignUp />,
  },
  {
    path: '/AboutUs',
    element: <AboutUs />,
  },
  {
    path: '/ErrorPage',
    element: <ErrorPage />
  }
])

function App() {
  return (
    <div className="App">
      <AboutUs />
    </div>
  );
}

export default App;
