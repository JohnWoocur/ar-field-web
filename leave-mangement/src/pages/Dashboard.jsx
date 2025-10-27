import React from 'react';
import StatCard from '../components/StatCard';
import LeaveCard from '../components/LeaveCard';
import CalendarWidget from '../components/CalendarWidget';
import UpcomingHolidays from '../components/UpcomingHolidays';
import { leaveRequests, dashboardStats } from '../data/sampleData';

const Dashboard = () => {
  return (
    <div className="flex-1 p-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Pending Requests"
          value={dashboardStats.pendingRequests}
          bgColor="bg-yellow-50"
          textColor="text-yellow-700"
        />
        <StatCard
          title="Approved This Month"
          value={dashboardStats.approvedThisMonth}
          bgColor="bg-green-50"
          textColor="text-green-700"
        />
        <StatCard
          title="Rejected"
          value={dashboardStats.rejected}
          bgColor="bg-red-50"
          textColor="text-red-700"
        />
        <StatCard
          title="Avg. Leave Days"
          value={dashboardStats.avgLeaveDays}
          bgColor="bg-blue-50"
          textColor="text-blue-700"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Leave Requests Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Leave Requests</h2>
          <div className="space-y-6">
            {leaveRequests.map((leave) => (
              <LeaveCard key={leave.id} leave={leave} />
            ))}
          </div>
        </div>

        {/* Calendar Widget and Holidays */}
        <div className="lg:col-span-1">
          <CalendarWidget />
          <UpcomingHolidays />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
