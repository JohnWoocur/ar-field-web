import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import LeaveRequestModal from './LeaveRequestModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-white shadow-sm border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Leave & Holiday Management</h1>
            <p className="text-gray-600 mt-1">Manage leave requests and track holidays</p>
          </div>
          <button 
            onClick={handleOpenModal}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors"
          >
            <FiPlus className="w-5 h-5" />
            <span>Request Leave</span>
          </button>
        </div>
      </div>
      
      <LeaveRequestModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Header;
