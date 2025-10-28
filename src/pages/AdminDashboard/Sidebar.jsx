import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FolderOpen, 
  FileText, 
  BarChart3,
  Settings,
  LogOut,
  User
} from 'lucide-react';
// 1. Import your logo image
import ngoLogo from '../../assets/logo@2x.png'; // **Replace 'your-logo-file-name.png' with your actual file name**

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: Users, label: 'Team Members', path: '/team-members' },
    { icon: Calendar, label: 'Attendance', path: '/attendance' },
    { icon: FolderOpen, label: 'Projects', path: '/projects' },
    { icon: FileText, label: 'Leave Management', path: '/leave-management' },
    { icon: BarChart3, label: 'Reports', path: '/reports' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          
          <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
            <img 
              src={ngoLogo} 
              alt="NGO Logo" 
              className="w-full h-full object-contain" // Use object-contain or object-cover as needed
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">NGO Manager</h1>
            <p className="text-xs text-gray-500">Admin Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-green-50 text-green-700 border-r-2 border-green-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Admin Profile Section */}
      <div className="p-4 border-t border-gray-200">
        {/* Profile Info */}
        <div className="flex items-center space-x-3 px-3 py-3 mb-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">Admin User</p>
            <p className="text-xs text-gray-500 truncate">admin@ngo.org</p>
          </div>
        </div>
        
        {/* Settings and Logout */}
        <div className="space-y-1">
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors text-left">
            <Settings className="w-4 h-4" />
            <span className="text-sm font-medium">Settings</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors text-left">
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;