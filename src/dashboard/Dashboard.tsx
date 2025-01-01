import React from "react";
import NavigationButtons from "../components/navigationButtons/NavigationButtons";

const Dashboard = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to the Dashboard</h1>
            <p>You have successfully logged in.</p>
            <NavigationButtons/>
        </div>
    );
};
export default Dashboard;
