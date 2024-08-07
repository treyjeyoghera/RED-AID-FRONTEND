import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import defaultProfilePic from './defaultProfilePic.png'; // Assume you have a default profile picture icon

const Login = () => {
    const [profilePicture, setProfilePicture] = useState(null);

    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .required('Required'),
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        const response = await fetch('/login', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(values),
                        });

                        const result = await response.json();
                        if (response.ok) {
                            alert(result.message);
                            setProfilePicture(result.profile_picture || defaultProfilePic);
                            // Redirect to the dashboard or another page on successful login
                            window.location.href = '/dashboard';
                        } else {
                            throw new Error(result.message);
                        }
                    } catch (error) {
                        console.error('Error during login:', error);
                        alert('Login failed: ' + error.message);
                    }
                    setSubmitting(false);
                }}
            >
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component="div" />

                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" component="div" />

                    <button type="submit">Login</button>
                </Form>
            </Formik>
            {profilePicture && (
                <div>
                    <h2>Profile Picture</h2>
                    <img src={profilePicture} alt="Profile" style={{ width: '100px', height: '100px' }} />
                </div>
            )}
        </div>
    );
};

export default Login;
