import React from 'react';

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-white shadow-sm flex flex-col justify-between">
      <div>
        <div className="px-6 py-6 border-b">
          <div className="text-xl font-bold">💚 NGO Manager</div>
          <div className="text-sm text-gray-500 mt-1">Admin Portal</div>
        </div>

        <nav className="mt-4 px-3 space-y-1">
          <a href="#" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">Dashboard</a>
          <a href="#" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">Employees</a>
          <a href="#" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">Team Members</a>
          <a href="#" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">Reports</a>
          <a href="#" className="block px-3 py-2 rounded-lg bg-green-100 text-green-700 font-medium">Settings</a>
        </nav>
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-200" />
          <div>
            <div className="text-sm font-medium text-gray-700">Admin User</div>
            <div className="text-xs text-gray-500">admin@ngo.org</div>
          </div>
        </div>
        <button className="mt-3 inline-flex items-center gap-2 text-sm text-red-600 hover:underline">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="16 17 21 12 16 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="21" y1="12" x2="9" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;


