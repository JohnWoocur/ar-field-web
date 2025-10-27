import React from 'react';
import { 
  FiHome, 
  FiUsers, 
  FiClock, 
  FiFolder, 
  FiCalendar, 
  FiBarChart2, 
  FiSettings, 
  FiLogOut
} from 'react-icons/fi';

const Sidebar = () => {
  const menuItems = [
    { icon: FiHome, label: 'Dashboard', active: false },
    { icon: FiUsers, label: 'Team Members', active: false },
    { icon: FiClock, label: 'Attendance', active: false },
    { icon: FiFolder, label: 'Projects', active: false },
    { icon: FiCalendar, label: 'Leave Management', active: true },
    { icon: FiBarChart2, label: 'Reports', active: false },
    { icon: FiSettings, label: 'Settings', active: false }
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-screen flex flex-col">
      {/* Logo and Title */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">NGO Manager</h1>
        <p className="text-sm text-gray-500 italic">Admin Portal</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors w-full text-left ${
                  item.active
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile Card */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 mb-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            alt="Admin User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-800">Admin User</p>
            <p className="text-sm text-gray-500">admin@ngo.org</p>
          </div>
        </div>
        
        {/* Logout Button */}
        <button className="flex items-center space-x-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
          <FiLogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
