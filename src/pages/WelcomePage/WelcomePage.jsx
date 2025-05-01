import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
    let navigate = useNavigate();

    return (
        <div
            className="welcome-container"
        >
            <h1>
                Welcome to PopX
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Nam, minima? Vel, facere. Quibusdam, ex voluptas!
            </p>
            <button
                onClick={() => {
                    navigate('/signup');
                }}
            >
                Create Account
            </button>
            <button
                onClick={() => {
                    navigate('/login');
                }}
            >
                Already Registered? Login
            </button>
        </div>
    );
};

export default WelcomePage;