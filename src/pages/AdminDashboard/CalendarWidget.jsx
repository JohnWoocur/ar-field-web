import React, { useState } from 'react';
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  MapPin,
  Plus
} from 'lucide-react';

const CalendarWidget = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const today = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  const events = [
    { date: 15, title: 'Team Meeting', time: '10:00 AM', type: 'meeting' },
    { date: 18, title: 'Project Review', time: '2:00 PM', type: 'project' },
    { date: 22, title: 'Volunteer Training', time: '9:00 AM', type: 'training' },
    { date: 25, title: 'Community Outreach', time: '1:00 PM', type: 'event' }
  ];
  
  const upcomingEvents = [
    { title: 'Board Meeting', date: 'Dec 15, 2024', time: '10:00 AM', location: 'Conference Room A' },
    { title: 'Volunteer Orientation', date: 'Dec 18, 2024', time: '2:00 PM', location: 'Main Hall' },
    { title: 'Project Presentation', date: 'Dec 22, 2024', time: '3:00 PM', location: 'Auditorium' }
  ];

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const renderCalendarDays = () => {
    const days = [];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // Day headers
    dayNames.forEach(day => {
      days.push(
        <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
          {day}
        </div>
      );
    });
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-8"></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
      const dayEvents = events.filter(event => event.date === day);
      
      days.push(
        <div
          key={day}
          className={`h-8 flex items-center justify-center text-sm rounded-lg cursor-pointer hover:bg-gray-100 ${
            isToday ? 'bg-blue-600 text-white' : 'text-gray-900'
          }`}
        >
          {day}
          {dayEvents.length > 0 && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
          )}
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Calendar & Events</h3>
        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </div>
      
      {/* Calendar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-md font-medium text-gray-900">
            {monthNames[currentMonth]} {currentYear}
          </h4>
          <div className="flex space-x-2">
            <button
              onClick={() => navigateMonth(-1)}
              className="p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateMonth(1)}
              className="p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {renderCalendarDays()}
        </div>
      </div>
      
      {/* Upcoming Events */}
      <div>
        <h4 className="text-md font-medium text-gray-900 mb-4">Upcoming Events</h4>
        <div className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{event.title}</p>
                <div className="flex items-center text-xs text-gray-600 mt-1">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{event.date}</span>
                  <Clock className="w-3 h-3 ml-2 mr-1" />
                  <span>{event.time}</span>
                  <MapPin className="w-3 h-3 ml-2 mr-1" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;
