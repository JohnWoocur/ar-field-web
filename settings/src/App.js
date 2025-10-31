import React from 'react';
import Sidebar from './components/Sidebar';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <SettingsPage />
    </div>
  );
}

export default App;
