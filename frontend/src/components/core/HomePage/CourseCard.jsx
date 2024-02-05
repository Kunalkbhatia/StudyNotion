// CourseCard.js

import React from 'react';

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  const { heading, description } = cardData;

  return (
    <div className={`p-4 border mb-4 rounded-md cursor-pointer ${currentCard === heading ? 'border-blue-500' : 'border-gray-300'}`} onClick={() => setCurrentCard(heading)}>
      <div className="flex items-center mb-3">
        
        <div>
          <h3 className="text-lg font-semibold">{heading}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
