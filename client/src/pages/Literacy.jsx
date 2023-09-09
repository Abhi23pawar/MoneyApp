import React from 'react';
import { Link } from 'react-router-dom';

const LiteracyPage = () => {
  const LiteracyData = [
    {
      title: 'Making a Budget',
      path: '/literacypage/makingabudget',
      imageSrc: '/images/budget.jpg',
    },


    {
      title: 'Managing My Finances',
      path: '/literacypage/managingfinances',
      imageSrc: '/images/personalfinance.jpg',
    },

    {
      title: 'Getting out of debt',
      path: '/literacypage/gettingoutofdebt',
      imageSrc: '/images/debt.jpg',
    },

    {
      title: 'Financial Independence',
      path: '/literacypage/financialindependence',
      imageSrc: '/images/financialindependence.jpg',
    },

    {
      title: 'Long Term Investment',
      path: '/literacypage/longterminvestment',
      imageSrc: '/images/investing.jpg',
    },

    {
      title: 'Saving for Retirement',
      path: '/literacypage/savingforretirement',
      imageSrc: '/images/retirement2.jpg',
    },


  ];

  
  return (
    <div className="financial-literacy-page">
      <h1 className="title">Financial Literacy</h1>
      <div className="common-images">
        {LiteracyData.map((topic, index) => (
          <Link to={topic.path} key={index} target="_blank">
            <div className="literacy-clickable-image">
              <h2>{topic.title}</h2>
              <img src={topic.imageSrc} alt={topic.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LiteracyPage;
