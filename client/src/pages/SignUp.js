import React from 'react';
import NavBar from '../components/NavBar';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import login from '../pages/login'
import { Link } from "react-router-dom"

const SignUp = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      first_name: '',
      last_name: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      username: Yup.string().required('Username is Required'),
      password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
      first_name: Yup.string().required('First name is Required'),
      last_name: Yup.string().required('Last name is Required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://127.0.0.1:5000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        if (response.ok) {
          alert(data.message);
          navigate('/login');
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Signup error:', error);
      }
    },
  });

  return (
    <div>
      <NavBar />
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
          />
          {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}

          <input
            type="text"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            placeholder="Username"
          />
          {formik.touched.username && formik.errors.username && <div>{formik.errors.username}</div>}

          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
          />
          {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}

          <input
            type="text"
            name="first_name"
            onChange={formik.handleChange}
            value={formik.values.first_name}
            placeholder="First Name"
          />
          {formik.touched.first_name && formik.errors.first_name && <div>{formik.errors.first_name}</div>}

          <input
            type="text"
            name="last_name"
            onChange={formik.handleChange}
            value={formik.values.last_name}
            placeholder="Last Name"
          />
          {formik.touched.last_name && formik.errors.last_name && <div>{formik.errors.last_name}</div>}
          <Link to="/Login">
          <button type="submit">Sign Up</button>
          </Link>
        </form>
        <div className="login-prompt">
          <p>Already have an account? <span onClick={() => navigate('/login')} style={{ cursor: 'pointer', color: 'blue' }}>Login</span></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
