import React from 'react';

export function Tabs({ value, onValueChange, children }) {
  return <div data-tabs-value={value}>{children}</div>;
}

export function TabsList({ children }) {
  return (
    <div className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-600">
      {children}
    </div>
  );
}

export function TabsTrigger({ value, current, onClick, children }) {
  const isActive = current === value;
  return (
    <button
      onClick={() => onClick?.(value)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        isActive ? 'bg-white text-green-700 shadow-sm' : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, current, children }) {
  if (current !== value) return null;
  return <div className="mt-4">{children}</div>;
}



