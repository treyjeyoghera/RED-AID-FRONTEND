import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      try {
        const response = await fetch('/auth/signup', {
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
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div>
      <h1>Signup</h1>
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
          type="text"
          name="username"
          placeholder="Username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username && <div>{formik.errors.username}</div>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}

        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          onChange={formik.handleChange}
          value={formik.values.first_name}
        />
        {formik.touched.first_name && formik.errors.first_name && <div>{formik.errors.first_name}</div>}

        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          onChange={formik.handleChange}
          value={formik.values.last_name}
        />
        {formik.touched.last_name && formik.errors.last_name && <div>{formik.errors.last_name}</div>}

        <button type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Signup'}
        </button>
      </form>
    </div>
  );
};

export default Signup;
