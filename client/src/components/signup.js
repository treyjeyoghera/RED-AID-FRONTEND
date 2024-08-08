import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
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
      username: Yup.string().required('Required'),
      password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
      first_name: Yup.string().required('Required'),
      last_name: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch('/signup', {
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
      <h1>Signup</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}

        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username && <div>{formik.errors.username}</div>}

        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}

        <input
          type="text"
          name="first_name"
          onChange={formik.handleChange}
          value={formik.values.first_name}
        />
        {formik.touched.first_name && formik.errors.first_name && <div>{formik.errors.first_name}</div>}

        <input
          type="text"
          name="last_name"
          onChange={formik.handleChange}
          value={formik.values.last_name}
        />
        {formik.touched.last_name && formik.errors.last_name && <div>{formik.errors.last_name}</div>}

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
