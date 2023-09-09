import React from 'react';

const LiteracyPage = () => {
  const LiteracyData = [
    {
        title: 'Making a budget',
        link: 'https://www.moneycrashers.com/how-to-make-a-budget/',
        imageSrc: '/images/budget.jpg', // Replace with the actual image source
      },
      {
        title: 'Managing my finances',
        link: 'https://www.moneycrashers.com/smart-financial-money-moves-make-20s/',
        imageSrc: '/images/personalfinance.jpg', // Replace with the actual image source
      },
      {
        title: 'Getting out of debt',
        link: 'https://www.moneycrashers.com/pay-off-credit-card-debt-fast-plan/',
        imageSrc: '/images/debt.jpg', // Replace with the actual image source
      },
      {
        title: 'Financial Independence',
        link: 'https://www.moneycrashers.com/fire-movement-financial-independence-retire-early/',
        imageSrc: '/images/financialindependence.jpg', // Replace with the actual image source
      },
      {
        title: 'Long Term Investment',
        link: 'https://www.moneycrashers.com/investing-for-the-long-run/',
        imageSrc: '/images/investing.jpg', // Replace with the actual image source
      },
      {
        title: 'Saving for Retirement',
        link: 'https://www.moneycrashers.com/how-much-save-retirement-planning-strategies-age/',
        imageSrc: '/images/retirement2.jpg', // Replace with the actual image source
      },
   
  ];

  const openExternalLink = (link) => {
    // Open the external link in a new browser window or tab
    window.open(link, '_blank');
  };

  return (
    <div className="financial-literacy-page">
      <h1 className="title">Financial Literacy</h1>

      <div className="financial-literacy-topics">
        {LiteracyData.map((topic, index) => (
          <div className="clickable-image" key={index} onClick={() => openExternalLink(topic.link)}>
            <h2>{topic.title}</h2>
            <img src={topic.imageSrc} alt={topic.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiteracyPage;
