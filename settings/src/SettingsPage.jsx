import React, { useState } from "react";

const tabs = ["Profile", "Organization", "Notifications", "Account"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Toggle = ({ enabled, onChange, label, description }) => {
  return (
    <div className="flex items-start justify-between gap-4 py-3">
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{label}</p>
        {description ? (
          <p className="text-sm text-gray-500">{description}</p>
        ) : null}
      </div>
      <button
        type="button"
        aria-pressed={enabled}
        onClick={() => onChange(!enabled)}
        className={classNames(
          enabled ? "bg-green-600" : "bg-gray-200",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
        )}
      >
        <span
          className={classNames(
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          )}
        />
      </button>
    </div>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
            <p className="text-sm text-gray-500">
              Manage your profile, organization, and preferences.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
              </svg>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:border-green-600 hover:text-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M16 13v-2H7V8l-5 4 5 4v-3zM20 3h-8v2h8v14h-8v2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const TabNav = ({ active, setActive }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex gap-6 border-b border-gray-200" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={classNames(
                "-mb-px whitespace-nowrap border-b-2 px-2 py-3 text-sm",
                active === tab
                  ? "border-green-600 font-semibold text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              )}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

const ProfileTab = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-lg font-semibold text-gray-900">Profile</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex items-center justify-center md:col-span-1">
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gray-100 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-12 w-12"
            >
              <path d="M12 5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 8c-3.866 0-7 2.239-7 5v1h14v-1c0-2.761-3.134-5-7-5z" />
            </svg>
          </div>
        </div>
        <div className="md:col-span-2">
          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Admin User"
                className="block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-green-600 focus:ring-green-600"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="admin@example.com"
                  className="block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-green-600 focus:ring-green-600"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  defaultValue="+123.456.7830"
                  className="block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-green-600 focus:ring-green-600"
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const OrganizationTab = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-lg font-semibold text-gray-900">Organization</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-end">
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              NGO Name
            </label>
            <input
              type="text"
              defaultValue="Helping Hands NGO"
              className="block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-green-600 focus:ring-green-600"
            />
          </div>
          <div className="md:col-span-1">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Upload Logo
            </label>
            <div className="flex h-10 w-full items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 text-xs text-gray-500">
              Upload logo
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              defaultValue="128 Main St, City"
              className="block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-green-600 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Contact Email
            </label>
            <input
              type="email"
              defaultValue="info@ngo.org"
              className="block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-green-600 focus:ring-green-600"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Contact Phone
            </label>
            <input
              type="tel"
              defaultValue="+84.123456789"
              className="block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-green-600 focus:ring-green-600"
            />
          </div>
        </div>
        <div>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
          >
            Save Changes
          </button>
        </div>
      </form>
    </section>
  );
};

const NotificationsTab = () => {
  const [newMember, setNewMember] = useState(true);
  const [newLeave, setNewLeave] = useState(true);
  const [newProject, setNewProject] = useState(true);
  const [unread, setUnread] = useState(true);

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="text-lg font-semibold text-gray-900">Account</h2>
      <p className="mb-6 text-sm text-gray-500">Preferences</p>
      <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
        <div className="px-4 sm:px-6">
          <Toggle
            enabled={newMember}
            onChange={setNewMember}
            label="New Member"
            description="Send an email when a new member joins."
          />
        </div>
        <div className="px-4 sm:px-6">
          <Toggle
            enabled={newLeave}
            onChange={setNewLeave}
            label="New Leave Request"
            description="Send an email when someone requests leave."
          />
        </div>
        <div className="px-4 sm:px-6">
          <Toggle
            enabled={newProject}
            onChange={setNewProject}
            label="New Project"
            description="Send an email when a new project is created."
          />
        </div>
        <div className="px-4 sm:px-6">
          <Toggle
            enabled={unread}
            onChange={setUnread}
            label="Unread Messages"
            description="Send an email when you receive an unread message."
          />
        </div>
      </div>
    </section>
  );
};

const AccountTab = () => {
  const [twoFA, setTwoFA] = useState(true);

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-lg font-semibold text-gray-900">Account</h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <h3 className="mb-3 text-sm font-semibold text-gray-900">Preferences</h3>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Language
              </label>
              <select className="block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-green-600 focus:ring-green-600">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Time Zone
              </label>
              <select className="block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-green-600 focus:ring-green-600">
                <option>GMT+5:30 Sri Lanka</option>
                <option>GMT+0:00 UTC</option>
                <option>GMT+1:00 Central Europe</option>
              </select>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <h3 className="mb-3 text-sm font-semibold text-gray-900">Security</h3>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Preferred Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-green-600 focus:ring-green-600"
              />
            </div>
            <Toggle
              enabled={twoFA}
              onChange={setTwoFA}
              label="Two-Factor Authentication"
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          <h3 className="mb-3 text-sm font-semibold text-gray-900">Management</h3>
          <div className="space-y-3">
            <button
              type="button"
              className="w-full rounded-md border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-800 hover:bg-yellow-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
            >
              Deactivate Account
            </button>
            <button
              type="button"
              className="w-full rounded-md border border-red-300 bg-red-50 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />
      <TabNav active={activeTab} setActive={setActiveTab} />
      <main className="flex-1 pb-12">
        {activeTab === "Profile" && <ProfileTab />}
        {activeTab === "Organization" && <OrganizationTab />}
        {activeTab === "Notifications" && <NotificationsTab />}
        {activeTab === "Account" && <AccountTab />}
      </main>
    </div>
  );
};

export default SettingsPage;


