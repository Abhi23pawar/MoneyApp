import React from 'react';

import Category from "../components/Category"; // Import the Category component

const Literacy = () => {
    return (
        <div>
            <h1>Financial Literacy</h1>
            {/* Integrate the Category component for each category */}
        <Category categoryName="Bills" />
        <Category categoryName="Movies" />
        <Category categoryName="Food" />
        {/* Add more categories as needed */}
        </div>
    );
};

export default Literacy;