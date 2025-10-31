import React, { useState } from 'react';
import Tabs from '../components/Tabs';
import TopBar from '../components/TopBar';
import ToggleSwitch from '../components/ToggleSwitch';

const ProfileContent = ({ fullName, setFullName, email, setEmail, phone, setPhone }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/3 flex items-start">
          <div className="h-28 w-28 rounded-full bg-gray-100 flex items-center justify-center border border-dashed border-gray-300">
            {/* Inline camera icon */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-500">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3l2-3h8l2 3h3a2 2 0 0 1 2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="13" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
            <input value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button className="inline-flex items-center justify-center rounded-lg bg-green-600 text-white px-4 py-2 font-semibold hover:bg-green-700 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};

const SectionCard = ({ children }) => (
  <div className="bg-white rounded-xl shadow-sm p-6">{children}</div>
);

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // Profile state
  const [fullName, setFullName] = useState('Admin User');
  const [email, setEmail] = useState('admin@example.com');
  const [phone, setPhone] = useState('+123.456.7830');

  // Organization form state
  const [orgName, setOrgName] = useState('NGO Global');
  const [regId, setRegId] = useState('#NGO-12345');
  const [address, setAddress] = useState('123 Charity St, City, Country');

  // Notification toggles
  const [emailNoti, setEmailNoti] = useState(true);
  const [smsNoti, setSmsNoti] = useState(false);
  const [monthlyReports, setMonthlyReports] = useState(true);

  // Account preferences
  const [language, setLanguage] = useState('English');
  const [timezone, setTimezone] = useState('GMT+5:30 Sri Lanka');
  const [twoFA, setTwoFA] = useState(true);

  return (
    <div className="flex-1 min-h-screen overflow-y-auto">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="mb-6">
          <TopBar />
        </div>

        <div className="mb-6">
          <Tabs activeTab={activeTab} onChange={setActiveTab} />
        </div>

        {activeTab === 'profile' && (
          <ProfileContent
            fullName={fullName}
            setFullName={setFullName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />
        )}

        {activeTab === 'organization' && (
          <SectionCard>
            <div className="mb-4 text-lg font-semibold">Organization Settings</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">NGO Name</label>
                  <input value={orgName} onChange={(e) => setOrgName(e.target.value)} className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Address</label>
                  <input value={address} onChange={(e) => setAddress(e.target.value)} className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Contact Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Contact Phone</label>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" />
                </div>
              </div>
              <div>
                <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors h-44 flex items-center justify-center text-gray-600">
                  Upload Logo
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button className="inline-flex items-center justify-center rounded-lg bg-green-600 text-white px-4 py-2 font-semibold hover:bg-green-700 transition-colors">Save Changes</button>
            </div>
          </SectionCard>
        )}

        {activeTab === 'notifications' && (
          <SectionCard>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Email Notifications</div>
                  <div className="text-sm text-gray-600">Receive updates via email</div>
                </div>
                <ToggleSwitch enabled={emailNoti} onChange={setEmailNoti} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">SMS Notifications</div>
                  <div className="text-sm text-gray-600">Receive alerts via SMS</div>
                </div>
                <ToggleSwitch enabled={smsNoti} onChange={setSmsNoti} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Monthly Report Alerts</div>
                  <div className="text-sm text-gray-600">Email monthly activity summary</div>
                </div>
                <ToggleSwitch enabled={monthlyReports} onChange={setMonthlyReports} />
              </div>
              <div className="pt-2">
                <button className="inline-flex items-center justify-center rounded-lg bg-green-600 text-white px-4 py-2 font-semibold hover:bg-green-700 transition-colors">Save</button>
              </div>
            </div>
          </SectionCard>
        )}

        {activeTab === 'account' && (
          <div className="space-y-6">
            <SectionCard>
              <div className="font-semibold mb-4">Preferences</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Language</label>
                  <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-200">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Time Zone</label>
                  <select value={timezone} onChange={(e) => setTimezone(e.target.value)} className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-200">
                    <option>GMT+5:30 Sri Lanka</option>
                    <option>GMT+0:00 UTC</option>
                    <option>GMT+1:00 Central Europe</option>
                    <option>GMT-5:00 Eastern</option>
                  </select>
                </div>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="font-semibold mb-4">Security</div>
              <div className="grid gap-4">
                <div>
                  <div className="text-sm font-medium text-gray-600">Preferee Password</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Two-Factor Authentication</div>
                    <div className="text-sm text-gray-600">Extra protection for your account</div>
                  </div>
                  <ToggleSwitch enabled={twoFA} onChange={setTwoFA} />
                </div>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="font-semibold mb-4">Management</div>
              <div className="flex flex-col md:flex-row gap-3">
                <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium">Deactivate Account</button>
                <button className="px-4 py-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-semibold">Delete Account</button>
              </div>
            </SectionCard>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;


