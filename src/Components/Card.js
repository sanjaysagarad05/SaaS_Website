import React from 'react';

const Card = ({ title, image, children }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      {image && (
        <div className="mb-4">
          <img
            src={image}
            alt="The image"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      )}
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default Card;
