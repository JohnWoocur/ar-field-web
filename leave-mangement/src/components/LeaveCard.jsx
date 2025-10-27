import React from 'react';
import { FiFile, FiClock, FiCalendar, FiCheck, FiX } from 'react-icons/fi';

const LeaveCard = ({ leave }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Approved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleApprove = () => {
    console.log('Approving leave request for:', leave.name);
  };

  const handleReject = () => {
    console.log('Rejecting leave request for:', leave.name);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
      <div className="flex items-start space-x-4">
        {/* Profile Picture */}
        <img
          src={leave.profileImg}
          alt={leave.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        
        <div className="flex-1">
          {/* Header with Name and Status */}
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{leave.name}</h3>
              <p className="text-sm text-gray-600">{leave.role}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(leave.status)}`}>
              {leave.status}
            </span>
          </div>

          {/* Leave Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="flex items-center space-x-2">
              <FiFile className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Leave Type</p>
                <p className="font-medium text-gray-800">{leave.leaveType}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <FiClock className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Duration</p>
                <p className="font-medium text-gray-800">{leave.duration}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <FiCalendar className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Dates</p>
                <p className="font-medium text-gray-800">{leave.dates}</p>
              </div>
            </div>
          </div>

          {/* Reason Box */}
          <div className="mt-4">
            <p className="text-xs text-gray-500 mb-2">Reason</p>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-700 text-sm">{leave.reason}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 mt-6">
            <button
              onClick={handleApprove}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <FiCheck className="w-4 h-4" />
              <span>Approve</span>
            </button>
            <button
              onClick={handleReject}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <FiX className="w-4 h-4" />
              <span>Reject</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveCard;
