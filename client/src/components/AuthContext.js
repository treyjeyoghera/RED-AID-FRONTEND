// src/components/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await fetch('http://localhost:5000/is_logged_in', {
                    method: 'GET',
                    credentials: 'include',
                });
                const result = await response.json();
                console.log('Session check result:', result);
                setIsLoggedIn(result.is_logged_in);
            } catch (error) {
                console.error('Error checking session:', error);
            }
        };

        checkSession();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};
