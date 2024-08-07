import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import defaultProfilePic from './defaultProfilePic.png'; // Assume you have a default profile picture icon
import './/signup.css'
const Signup = () => {
    const [preview, setPreview] = useState(defaultProfilePic);

    return (
        <div>
            <h1>Signup</h1>
            <Formik
                initialValues={{
                    email: '',
                    username: '',
                    password: '',
                    first_name: '',
                    last_name: '',
                    profile_picture: ''
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    username: Yup.string()
                        .required('Required'),
                    password: Yup.string()
                        .required('Required'),
                    first_name: Yup.string(),
                    last_name: Yup.string(),
                    profile_picture: Yup.string().url('Invalid URL')
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        const response = await fetch('/signup', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(values),
                        });

                        const result = await response.json();
                        if (response.ok) {
                            alert(result.message);
                            // Redirect to the login page or another page on successful signup
                            window.location.href = '/login';
                        } else {
                            throw new Error(result.message);
                        }
                    } catch (error) {
                        console.error('Error during signup:', error);
                        alert('Signup failed: ' + error.message);
                    }
                    setSubmitting(false);
                }}
            >
                {({ setFieldValue }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component="div" />

                        <label htmlFor="username">Username</label>
                        <Field name="username" type="text" />
                        <ErrorMessage name="username"  
                        component="div" />

                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password" />
                        <ErrorMessage name="password" component="div" />

                        <label htmlFor="first_name">First Name</label>
                        <Field name="first_name" type="text" />
                        <ErrorMessage name="first_name" component="div" />

                        <label htmlFor="last_name">Last Name</label>
                        <Field name="last_name" type="text" />
                        <ErrorMessage name="last_name" component="div" />

                        <label htmlFor="profile_picture">Profile Picture URL</label>
                        <Field name="profile_picture" type="text" onChange={e => {
                            setFieldValue('profile_picture', e.target.value);
                            setPreview(e.target.value || defaultProfilePic);
                        }} />
                        <ErrorMessage name="profile_picture" component="div" />

                        <div>
                            <h2>Profile Picture Preview</h2>
                            <img src={preview} alt="Profile" style={{ width: '100px', height: '100px' }} />
                        </div>

                        <button type="submit">Signup</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Signup;
