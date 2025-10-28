import React from 'react';
import { Plus, CheckCircle, FolderPlus, Bell, Search } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Greeting */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Admin</h1>
          <p className="text-gray-600">Here's what's happening with your NGO today</p>
        </div>

        {/* Right side - Search and Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            {/* Button 1: Add Employee */}
            <button className="flex items-center space-x-2 bg-[#F5F5F5] text-gray-800 px-4 py-2 rounded-lg transition-colors border border-black/10 hover:bg-[#13806F] hover:text-white">
              <Plus className="w-4 h-4" />
              <span>Add Employee</span>
            </button>
            
            {/* Button 2: Approve Leave */}
            <button className="flex items-center space-x-2 bg-[#F5F5F5] text-gray-800 px-4 py-2 rounded-lg transition-colors border border-black/10 hover:bg-[#13806F] hover:text-white">
              <CheckCircle className="w-4 h-4" />
              <span>Approve Leave</span>
            </button>
            
            {/* Button 3: Assign Project */}
            <button className="flex items-center space-x-2 bg-[#F5F5F5] text-gray-800 px-4 py-2 rounded-lg transition-colors border border-black/10 hover:bg-[#13806F] hover:text-white">
              <FolderPlus className="w-4 h-4" />
              <span>Assign Project</span>
            </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
