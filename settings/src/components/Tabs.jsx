import React from 'react';

const tabs = [
  { key: 'profile', label: 'Profile' },
  { key: 'organization', label: 'Organization' },
  { key: 'notifications', label: 'Notifications' },
  { key: 'account', label: 'Account' },
];

const Tabs = ({ activeTab, onChange }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm w-full">
      <div className="flex gap-2 px-2">
        {tabs.map((t) => {
          const isActive = activeTab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => onChange(t.key)}
              className={
                `px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 ` +
                (isActive
                  ? 'border-green-600 text-green-700'
                  : 'border-transparent text-gray-700 hover:bg-gray-50')
              }
            >
              {t.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;


