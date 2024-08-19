import React, { useState, useEffect } from 'react';

const UserProfile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [userId, setUserId] = useState(null);

    // Fetch a random user ID from the backend
    useEffect(() => {
        const fetchRandomUserId = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/random-user-id', {
                    method: 'GET',
                });
                if (response.ok) {
                    const data = await response.json();
                    setUserId(data.user_id);
                } else {
                    console.error('Failed to fetch random user ID');
                }
            } catch (error) {
                console.error('Error fetching random user ID:', error);
            }
        };

        fetchRandomUserId();
    }, []);

    // Fetch the user profile once the user ID is set
    useEffect(() => {
        if (userId) {
            const fetchUserProfile = async () => {
                try {
                    const response = await fetch(`http://127.0.0.1:5000/profile/${userId}`, {
                        method: 'GET',
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setUserProfile(data);
                    } else {
                        console.error('Failed to fetch user profile');
                    }
                } catch (error) {
                    console.error('Error fetching user profile:', error);
                }
            };

            fetchUserProfile();
        }
    }, [userId]);

    if (!userProfile) return <div>Loading...</div>;

    return (
        <div style={styles.container}>
            <div style={styles.profileHeader}>
                <img src={userProfile.profile_picture || '/default-profile.png'} alt="Profile" style={styles.profilePicture} />
                <h1 style={styles.name}>{userProfile.first_name} {userProfile.last_name}</h1>
                <p style={styles.email}>{userProfile.email}</p>
            </div>
            <div style={styles.details}>
                <h2 style={styles.sectionTitle}>Employment History</h2>
                {userProfile.employments.length > 0 ? (
                    <ul style={styles.list}>
                        {userProfile.employments.map(emp => (
                            <li key={emp.id} style={styles.listItem}>
                                <h3>{emp.title}</h3>
                                <p>{emp.description}</p>
                                <p>{emp.location}</p>
                                <p>{emp.salary_range}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No employments found</p>
                )}
            </div>
            <div style={styles.details}>
                <h2 style={styles.sectionTitle}>Applications</h2>
                {userProfile.applications.length > 0 ? (
                    <ul style={styles.list}>
                        {userProfile.applications.map(app => (
                            <li key={app.id} style={styles.listItem}>
                                <h3>Application for Employment ID: {app.employment_id}</h3>
                                <p>Name: {app.name}</p>
                                <p>Phone: {app.phone_number}</p>
                                <p>Email: {app.email}</p>
                                <p>Cover Letter: {app.cover_letter}</p>
                                <p>Resume: {app.resume}</p>
                                <p>LinkedIn: {app.linkedin}</p>
                                <p>Portfolio: {app.portfolio}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No applications found</p>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        margin: '5px',
        padding: '20px',
        backgroundColor: '#ffffff',
        color: '#000000',
        fontFamily: 'Arial, sans-serif',
    },
    profileHeader: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    profilePicture: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        border: '5px solid #32CD32', // Lime green border
    },
    name: {
        color: '#32CD32', // Lime green
        fontSize: '2em',
    },
    email: {
        color: '#000000',
        fontSize: '1.2em',
    },
    details: {
        margin: '20px 0',
    },
    sectionTitle: {
        color: '#32CD32', // Lime green
        fontSize: '1.5em',
        borderBottom: '2px solid #32CD32', // Lime green underline
        paddingBottom: '5px',
    },
    list: {
        listStyleType: 'none',
        padding: '0',
    },
    listItem: {
        backgroundColor: '#f4f4f4',
        margin: '10px 0',
        padding: '10px',
        borderRadius: '5px',
    },
};

export default UserProfile;
