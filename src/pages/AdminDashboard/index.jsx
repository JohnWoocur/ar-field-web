import React from 'react';
import { Clock, CheckCircle, MapPin } from 'lucide-react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import StatsCards from './StatsCards';
import RecentActivity from './RecentActivity';
import CalendarWidget from './CalendarWidget';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader />
        
        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Stats Cards */}
          <StatsCards />
          
          {/* Main Content Grid */}
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Activity - Takes 2 columns on large screens */}
              <div className="lg:col-span-2">
                <RecentActivity />
              </div>
              
              {/* Calendar Widget - Takes 1 column on large screens */}
              <div className="lg:col-span-1">
                <CalendarWidget />
              </div>
            </div>
          </div>

          {/* Work Summary Cards Section */}
          <div className="px-6 pb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Work Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Total Work Hours Card */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <div className="w-full h-full bg-blue-100 rounded-full transform translate-x-8 -translate-y-8"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-600 mb-2">Total Work Hours</p>
                      <p className="text-3xl font-bold text-blue-600 mb-1">1,248</p>
                      <p className="text-sm text-gray-500">This week</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Tasks Completed Card */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <div className="w-full h-full bg-green-100 rounded-full transform translate-x-8 -translate-y-8"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-600 mb-2">Tasks Completed</p>
                      <p className="text-3xl font-bold text-green-600 mb-1">342</p>
                      <p className="text-sm text-gray-500">This month</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Locations Card */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <div className="w-full h-full bg-purple-100 rounded-full transform translate-x-8 -translate-y-8"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-600 mb-2">Active Locations</p>
                      <p className="text-3xl font-bold text-purple-600 mb-1">12</p>
                      <p className="text-sm text-gray-500">Field offices</p>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-xl">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
