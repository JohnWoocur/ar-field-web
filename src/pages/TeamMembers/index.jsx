import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  UserPlus, 
  MoreVertical, 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from 'lucide-react';
// Assuming these are correctly located relative to your file
import Layout from '../../components/Layout'; 
import AddMemberModal from './AddMemberModal';

// Define the custom brand colors for reference (but we use hex codes directly in classNames for stability)
const BRAND_GREEN = '#13806F';       
const BRAND_DARKER_GREEN = '#004234'; 

const TeamMembers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [menuOpenId, setMenuOpenId] = useState(null);

  // Corrected Avatar URLs (Size reduced to w=60&h=60 for efficiency)
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Project Manager',
      email: 'sarah.j@ngo.org',
      phone: '+1 234 567 8900',
      location: 'Main Office',
      type: 'Full-time',
      status: 'Active',
      skills: ['Leadership', 'Project Planning', 'Community Engagement'],
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Field Coordinator',
      email: 'michael.c@ngo.org',
      phone: '+1 234 567 8901',
      location: 'Field Office - North',
      type: 'Full-time',
      status: 'Active',
      skills: ['Logistics', 'Team Building', 'Data Collection'],
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      role: 'Health Volunteer',
      email: 'priya.s@volunteer.org',
      phone: '+1 234 567 8902',
      location: 'Community Center',
      type: 'Volunteer',
      status: 'Active',
      skills: ['Healthcare', 'First Aid', 'Teaching'],
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'David Okafor',
      role: 'IT Specialist',
      email: 'david.o@ngo.org',
      phone: '+1 234 567 8903',
      location: 'Tech Hub',
      type: 'Full-time',
      status: 'Active',
      skills: ['Web Development', 'Database Management', 'System Administration'],
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Emma Williams',
      role: 'Donor Relations',
      email: 'emma.w@ngo.org',
      phone: '+1 234 567 8904',
      location: 'Main Office',
      type: 'Full-time',
      status: 'Active',
      skills: ['Fundraising', 'Communication', 'Event Planning'],
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'James Rodriguez',
      role: 'Education Coordinator',
      email: 'james.r@ngo.org',
      phone: '+1 234 567 8905',
      location: 'Learning Center',
      type: 'Full-time',
      status: 'Active',
      skills: ['Curriculum Development', 'Training', 'Mentoring'],
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face'
    }
  ];

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'All Types' || member.type === typeFilter;
    const matchesStatus = statusFilter === 'All Status' || member.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <Layout>
      <div className="flex-1 overflow-y-auto">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Title Section */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Employees & Volunteers</h1>
              <p className="text-gray-600 mt-1">Manage your team members and volunteers</p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 lg:items-center">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent w-full sm:w-64"
                />
              </div>

              {/* Filter Dropdowns */}
              <div className="flex gap-2">
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                >
                  <option value="All Types">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Volunteer">Volunteer</option>
                </select>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                >
                  <option value="All Status">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              {/* Add New Member Button - FIXED TAILWIND ISSUE */}
              <button 
                onClick={() => setIsAddModalOpen(true)}
                // FIX: Using direct hex codes in the className string
                className="flex items-center gap-2 bg-[#004234] text-white px-4 py-2 rounded-lg transition-colors hover:bg-[#13806F]"
              >
                <UserPlus className="w-4 h-4" />
                <span>Add New Member</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer" 
              onClick={() => window.location.assign(`/team-members/${member.id}`)}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
                <div className="relative"> {/* Added relative wrapper for the menu */}
                  <button
                    aria-haspopup="menu"
                    aria-expanded={menuOpenId === member.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setMenuOpenId((prev) => (prev === member.id ? null : member.id));
                    }}
                    className="p-1 text-gray-400 hover:text-gray-600 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {menuOpenId === member.id && (
                    <div
                      role="menu"
                      // Positioning adjusted to be relative to the card/button's parent
                      className="absolute right-0 mt-2 w-56 rounded-lg border border-gray-200 bg-white shadow-lg p-1 z-20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        role="menuitem"
                        onClick={() => { console.log('View Profile', member); setMenuOpenId(null); }}
                        className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-50"
                      >
                        View Profile
                      </button>
                      <button
                        role="menuitem"
                        onClick={() => { console.log('Edit Details', member); setMenuOpenId(null); }}
                        className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-50"
                      >
                        Edit Details
                      </button>
                      <button
                        role="menuitem"
                        onClick={() => { console.log('Assign Project', member); setMenuOpenId(null); }}
                        className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-50"
                      >
                        Assign Project
                      </button>
                      <div className="my-1 h-px bg-gray-200" />
                      <button
                        role="menuitem"
                        onClick={() => { console.log('Deactivate', member); setMenuOpenId(null); }}
                        className="w-full text-left px-3 py-2 rounded-md text-sm text-red-600 hover:bg-red-50"
                      >
                        Deactivate
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Badges */}
              <div className="flex gap-2 mb-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  // Logic for type badge (Full-time vs. Volunteer)
                  member.type === 'Full-time' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {member.type}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  // Logic for status badge (Active vs. Inactive)
                  member.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {member.status}
                </span>
              </div>

              {/* Contact Information */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{member.location}</span>
                </div>
              </div>

              {/* Skills Section */}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Skills:</p>
                <div className="flex flex-wrap gap-1">
                  {member.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No members found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
      </div>

      {/* Add Member Modal */}
      <AddMemberModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
      />
    </Layout>
  );
};

export default TeamMembers;