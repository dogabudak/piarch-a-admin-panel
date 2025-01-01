import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationButtons.css';

const NavigationButtons = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button
                className="button"
                onClick={() => navigate('/coordinates')}
            >
                Add Coordinates
            </button>
            <button
                className="button logout"
                onClick={() => {
                    //TODO logout
                    return navigate('/')
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default NavigationButtons;
