import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Pencil, Mail, Phone, MapPin, CalendarDays, CheckCircle, Calendar as CalendarIcon, Clock as ClockIcon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs';
import Layout from '../../components/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';

const EmployeeProfile = () => {
  const navigate = useNavigate();
  const { employeeId } = useParams();
  const [tab, setTab] = useState('details');
  const [isEditing, setIsEditing] = useState(false);

  const employee = {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Project Manager',
    email: 'sarah.j@ngo.org',
    phone: '+1 234 567 8900',
    location: 'Main Office',
    status: 'Active',
    type: 'Full-time',
    joined: 'Jan 15, 2023',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=160&h=160&fit=crop&crop=face'
  };

  const initialSkills = useMemo(() => (
    ['Leadership','Project Planning','Community Engagement','Budget Management','Team Coordination']
  ), []);

  const [formData, setFormData] = useState({
    fullName: employee.name,
    email: employee.email,
    phone: employee.phone,
    address: '123 Main St, City, State 12345',
    idProof: 'Passport: AB1234567',
    designation: employee.role,
    employmentType: employee.type,
    workLocation: employee.location,
    status: employee.status,
    joinDate: '2023-01-15',
    skills: initialSkills,
  });

  const [newSkill, setNewSkill] = useState('');

  const handleInput = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addSkill = () => {
    if (!newSkill.trim()) return;
    if (formData.skills.includes(newSkill.trim())) return;
    setFormData(prev => ({ ...prev, skills: [...prev.skills, newSkill.trim()] }));
    setNewSkill('');
  };

  const removeSkill = (skill) => {
    setFormData(prev => ({ ...prev, skills: prev.skills.filter(s => s !== skill) }));
  };

  const onCancelEdit = () => {
    setFormData({
      fullName: employee.name,
      email: employee.email,
      phone: employee.phone,
      address: '123 Main St, City, State 12345',
      idProof: 'Passport: AB1234567',
      designation: employee.role,
      employmentType: employee.type,
      workLocation: employee.location,
      status: employee.status,
      joinDate: '2023-01-15',
      skills: initialSkills,
    });
    setNewSkill('');
    setIsEditing(false);
  };

  const onSave = () => {
    console.log('Updated Employee Profile:', formData);
    setIsEditing(false);
  };

  return (
    <Layout>
      <div className="flex-1 overflow-y-auto bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{isEditing ? 'Edit Employee Profile' : 'Employee Profile'}</h1>
              <p className="text-gray-600">{isEditing ? 'Modify and update employee details' : 'View and manage employee details'}</p>
            </div>
          </div>
          {isEditing ? (
            <div className="flex items-center gap-2">
              <button
                onClick={onCancelEdit}
                className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={onSave}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
              >
                Save Changes
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors bg-white text-gray-700 border-gray-300 hover:bg-gray-50`}
            >
              <Pencil className="w-4 h-4" />
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-5">
            <img src={employee.avatar} alt={employee.name} className="w-28 h-28 rounded-full object-cover" />
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-xl font-semibold text-gray-900">{isEditing ? formData.fullName : employee.name}</h2>
                <span className="px-2.5 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">{employee.status}</span>
                <span className="px-2.5 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700 font-medium">{employee.type}</span>
              </div>
              <p className="text-gray-600 mt-1">{isEditing ? formData.designation : employee.role}</p>
              <div className="mt-3 space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-gray-500" /> {isEditing ? formData.email : employee.email}</div>
                <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-gray-500" /> {isEditing ? formData.phone : employee.phone}</div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-500" /> {isEditing ? formData.workLocation : employee.location}</div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-700">
            <div className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-gray-500" /> Joined {isEditing ? new Date(formData.joinDate).toLocaleDateString(undefined,{year:'numeric',month:'short',day:'2-digit'}) : employee.joined}</div>
          </div>
        </div>

        <div className="mt-6">
          <Tabs value={tab} onValueChange={setTab}>
            <TabsList>
              <TabsTrigger value="details" current={tab} onClick={setTab}>Details</TabsTrigger>
              <TabsTrigger value="projects" current={tab} onClick={setTab}>Projects</TabsTrigger>
              <TabsTrigger value="attendance" current={tab} onClick={setTab}>Attendance</TabsTrigger>
              <TabsTrigger value="activity" current={tab} onClick={setTab}>Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="details" current={tab}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                  {isEditing ? (
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="text-gray-500 mb-1">Full Name</p>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" value={formData.fullName} onChange={(e)=>handleInput('fullName', e.target.value)} />
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Email Address</p>
                        <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" value={formData.email} onChange={(e)=>handleInput('email', e.target.value)} />
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Phone Number</p>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" value={formData.phone} onChange={(e)=>handleInput('phone', e.target.value)} />
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Address</p>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" value={formData.address} onChange={(e)=>handleInput('address', e.target.value)} />
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">ID Proof</p>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" value={formData.idProof} onChange={(e)=>handleInput('idProof', e.target.value)} />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 text-sm">
                      <div><p className="text-gray-500">Full Name</p><p className="font-medium text-gray-900">{employee.name}</p></div>
                      <div><p className="text-gray-500">Email Address</p><p className="font-medium text-gray-900">{employee.email}</p></div>
                      <div><p className="text-gray-500">Phone Number</p><p className="font-medium text-gray-900">{employee.phone}</p></div>
                      <div><p className="text-gray-500">Address</p><p className="font-medium text-gray-900">123 Main St, City, State 12345</p></div>
                      <div><p className="text-gray-500">ID Proof</p><p className="font-medium text-gray-900">Passport: AB1234567</p></div>
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Work Information</h3>
                  {isEditing ? (
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="text-gray-500 mb-1">Designation</p>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" value={formData.designation} onChange={(e)=>handleInput('designation', e.target.value)} />
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Employment Type</p>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" value={formData.employmentType} onChange={(e)=>handleInput('employmentType', e.target.value)}>
                          <option>Full-time</option>
                          <option>Part-time</option>
                          <option>Volunteer</option>
                          <option>Contract</option>
                        </select>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Work Location</p>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" value={formData.workLocation} onChange={(e)=>handleInput('workLocation', e.target.value)} />
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Status</p>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" value={formData.status} onChange={(e)=>handleInput('status', e.target.value)}>
                          <option>Active</option>
                          <option>Inactive</option>
                          <option>Leave of Absence</option>
                        </select>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Join Date</p>
                        <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" value={formData.joinDate} onChange={(e)=>handleInput('joinDate', e.target.value)} />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 text-sm">
                      <div><p className="text-gray-500">Designation</p><p className="font-medium text-gray-900">{employee.role}</p></div>
                      <div><p className="text-gray-500">Employment Type</p><p className="font-medium text-gray-900">{employee.type}</p></div>
                      <div><p className="text-gray-500">Work Location</p><p className="font-medium text-gray-900">{employee.location}</p></div>
                      <div><p className="text-gray-500">Status</p><p className="font-medium text-gray-900">{employee.status}</p></div>
                      <div><p className="text-gray-500">Join Date</p><p className="font-medium text-gray-900">Jan 15, 2023</p></div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="projects" current={tab}>
              <div className="space-y-4">
                {[
                  { name: 'Water Sanitation Drive', role: 'Lead', progress: 75, status: 'Active' },
                  { name: 'Education Initiative', role: 'Coordinator', progress: 60, status: 'Active' },
                  { name: 'Health Campaign 2024', role: 'Manager', progress: 100, status: 'Completed' },
                ].map((p, idx) => (
                  <Card key={idx} className="rounded-2xl border border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{p.name}</h4>
                          <p className="text-sm text-gray-600">Role: {p.role}</p>
                        </div>
                        <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                          p.status === 'Completed'
                            ? 'bg-green-700 text-white'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {p.status}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-sm text-gray-700 mb-2">
                          <span>Progress</span>
                          <span className="text-gray-800 font-medium">{p.progress}%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div
                            className={`h-2 rounded-full bg-green-700`}
                            style={{ width: `${p.progress}%` }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="attendance" current={tab}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* This Month */}
                <Card className="rounded-2xl border border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">This Month</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Present */}
                      <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                        <p className="text-sm text-green-700">Present</p>
                        <p className="mt-1 text-3xl font-bold text-green-700">18</p>
                      </div>
                      {/* Absent */}
                      <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                        <p className="text-sm text-red-600">Absent</p>
                        <p className="mt-1 text-3xl font-bold text-red-600">1</p>
                      </div>
                      {/* Leaves */}
                      <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
                        <p className="text-sm text-indigo-700">Leaves</p>
                        <p className="mt-1 text-3xl font-bold text-indigo-700">2</p>
                      </div>
                      {/* Total Days */}
                      <div className="rounded-xl border border-purple-200 bg-purple-50 p-4">
                        <p className="text-sm text-purple-700">Total Days</p>
                        <p className="mt-1 text-3xl font-bold text-purple-700">21</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* This Year */}
                <Card className="rounded-2xl border border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-6">This Year</h4>
                    <div className="text-center mb-4">
                      <p className="text-sm text-gray-600 mb-1">Attendance Rate</p>
                      <p className="text-4xl font-extrabold text-green-700">94.5%</p>
                      <p className="text-sm text-gray-600 mt-1">229 of 242 days</p>
                    </div>
                    {/* Progress bar */}
                    <div className="mt-6">
                      <div className="h-3 w-full rounded-full bg-gray-200">
                        <div className="h-3 rounded-full bg-green-700" style={{ width: '94.5%' }} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="activity" current={tab}>
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h4>
                <div className="divide-y divide-gray-200">
                  {[
                    { title: 'Checked in at Main Office', date: 'Oct 1, 2024', time: '9:00 AM' },
                    { title: 'Submitted project report', date: 'Sep 30, 2024', time: '4:30 PM' },
                    { title: 'Attended team meeting', date: 'Sep 29, 2024', time: '2:00 PM' },
                    { title: 'Checked in at Field Office', date: 'Sep 28, 2024', time: '8:45 AM' },
                  ].map((a, i) => (
                    <div key={i} className="py-4 flex items-start gap-3">
                      <div className="mt-0.5">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-900 font-medium">{a.title}</p>
                        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600">
                          <span className="inline-flex items-center gap-1"><CalendarIcon className="w-4 h-4" /> {a.date}</span>
                          <span className="inline-flex items-center gap-1"><ClockIcon className="w-4 h-4" /> {a.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Skills & Expertise Card - only visible on Details tab */}
      {tab === 'details' && (
        <div className="max-w-7xl mx-auto px-6 pb-10">
          <Card className="rounded-2xl border border-gray-200">
            <CardHeader className="pb-0">
              <CardTitle className="text-lg">Skills & Expertise</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              {isEditing ? (
                <div>
                  <div className="flex gap-2 mb-3">
                    <input
                      value={newSkill}
                      onChange={(e)=>setNewSkill(e.target.value)}
                      onKeyDown={(e)=>{ if(e.key==='Enter'){ e.preventDefault(); addSkill(); } }}
                      placeholder="Add a skill"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <button onClick={addSkill} className="px-3 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200">Add</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill) => (
                      <span key={skill} className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-full bg-green-50 text-green-800 border border-green-200">
                        {skill}
                        <button onClick={()=>removeSkill(skill)} className="text-green-700 hover:text-green-900">×</button>
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 text-sm rounded-full bg-green-50 text-green-800 border border-green-200">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
      </div>
    </Layout>
  );
};

export default EmployeeProfile;




