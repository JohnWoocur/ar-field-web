import React from 'react';
import { FiCalendar } from 'react-icons/fi';

const UpcomingHolidays = () => {
  const holidays = [
    {
      id: 1,
      name: "National Holiday",
      date: "Oct 10, 2024",
      type: "Public Holiday",
      typeColor: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      id: 2,
      name: "NGO Foundation Day",
      date: "Nov 5, 2024",
      type: "Organization Event",
      typeColor: "bg-green-100 text-green-800 border-green-200"
    },
    {
      id: 3,
      name: "Thanksgiving",
      date: "Nov 28, 2024",
      type: "Public Holiday",
      typeColor: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      id: 4,
      name: "Year End Break",
      date: "Dec 25–31, 2024",
      type: "Organization Holiday",
      typeColor: "bg-purple-100 text-purple-800 border-purple-200"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md mt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Holidays</h3>
      <div className="space-y-3">
        {holidays.map((holiday) => (
          <div
            key={holiday.id}
            className="bg-gray-50 rounded-lg p-4 flex items-center space-x-3"
          >
            <div className="flex-shrink-0">
              <FiCalendar className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-gray-800 text-sm">{holiday.name}</h4>
              <p className="text-xs text-gray-600 mt-1">{holiday.date}</p>
            </div>
            <div className="flex-shrink-0">
              <span className={`px-2 py-1 text-xs font-medium rounded-full border ${holiday.typeColor}`}>
                {holiday.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingHolidays;
