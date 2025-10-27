import React from 'react';

const StatCard = ({ title, value, bgColor, textColor = "text-gray-700" }) => {
  return (
    <div className={`${bgColor} rounded-2xl p-6 shadow-md`}>
      <h3 className="text-sm font-medium text-gray-600 mb-2">{title}</h3>
      <p className={`text-3xl font-bold ${textColor}`}>{value}</p>
    </div>
  );
};

export default StatCard;
