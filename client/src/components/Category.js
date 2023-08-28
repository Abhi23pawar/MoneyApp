import React, { useState } from 'react';

const Category = ({ categoryName }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const getCategoryLink = () => {
    switch (categoryName) {
      case 'Bills':
        return 'https://google.com'; // Replace with actual URL
      case 'Movies':
        return 'https://yahoo.com'; // Replace with actual URL
      case 'Food':
        return 'https://bing.com'; // Replace with actual URL
      default:
        return '#'; // Default link if category name doesn't match
    }
  };

  return (
    <div className="category">
      <h3>{categoryName}</h3>
      <form>
        {/* Add transaction form */}
      </form>
      <span className="info-icon" onClick={handleInfoClick}>
        ℹ️
      </span>
      {showInfo && (
        <div className="info-message">
          Want to learn more about budgeting for {categoryName}?
          <a
            href={getCategoryLink()} // Use the getCategoryLink function
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here
          </a>
        </div>
      )}
    </div>
  );
};

export default Category;
