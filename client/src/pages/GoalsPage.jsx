import React, { useState } from 'react';
import GoalForm from '../components/GoalForm';

const GoalsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);

  const openForm = (goal) => {
    setSelectedGoal(goal);
    setShowForm(true);
  };

  const closeForm = () => {
    setSelectedGoal(null);
    setShowForm(false);
  };

  const goalsData = [
    { title: 'House', imageSrc: '/images/house.jpg' },
    { title: 'Car', imageSrc: '/images/car.jpg' },
    { title: 'Investment', imageSrc: '/images/investment.jpg' },
    { title: 'Retirement', imageSrc: '/images/retirement.jpg' },
    { title: 'Vacation', imageSrc: '/images/vacation.jpg' },
    { title: 'Other', imageSrc: '/images/other.jpg' },
  ];

  return (
    <div className="goals-page">
      <h1 className="title">Goals</h1>

      <div className="goal-images">
        {goalsData.map((goal, index) => (
          <div className="clickable-image" key={index} onClick={() => openForm(goal)}>
            <h2>{goal.title}</h2>
            <img src={goal.imageSrc} alt={goal.title} />
          </div>
        ))}
      </div>

      {showForm && <GoalForm goal={selectedGoal} onClose={closeForm} />}
    </div>
  );
};

export default GoalsPage;
