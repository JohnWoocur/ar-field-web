import React from 'react';
import { 
  UserPlus, 
  Calendar, 
  FileText, 
  CheckCircle, 
  Clock,
  ArrowRight
} from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'user',
      icon: UserPlus,
      title: 'New member added',
      description: 'Sarah Johnson joined the team',
      time: '2 minutes ago',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      type: 'attendance',
      icon: Calendar,
      title: 'Attendance marked',
      description: 'John Doe checked in for today',
      time: '15 minutes ago',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 3,
      type: 'project',
      icon: FileText,
      title: 'Project updated',
      description: 'Community Outreach project status changed',
      time: '1 hour ago',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 4,
      type: 'approval',
      icon: CheckCircle,
      title: 'Leave approved',
      description: 'Mike Wilson\'s leave request approved',
      time: '2 hours ago',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 5,
      type: 'reminder',
      icon: Clock,
      title: 'Meeting reminder',
      description: 'Team meeting in 30 minutes',
      time: '3 hours ago',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
          View all
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className={`${activity.bgColor} p-2 rounded-lg`}>
                <Icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-600">{activity.description}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
