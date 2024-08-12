import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// import './login.css';
import NavBar from '../components/NavBar';


const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await fetch('http://127.0.0.1:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        if (response.ok) {
          alert(data.message);
          navigate('/homepage'); // Redirect to the dashboard or homepage on success
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Login error:', error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div>
        <NavBar />
      <div className="login-container">  {/* Add styling for the login form */}  </div>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
