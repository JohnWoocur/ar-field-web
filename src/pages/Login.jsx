import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [role, setRole] = useState('Admin');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2d6a4f] via-[#40916c] to-[#52b788] flex items-center justify-center p-4">
      <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border w-full max-w-md shadow-2xl">
        <div className="grid auto-rows-min items-start gap-1.5 px-6 pt-6 text-center space-y-4 pb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#2d6a4f] to-[#52b788] rounded-2xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
              <path d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10a1 1 0 0 1-1 0z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl">NGO Management System</h1>
            <p className="mt-2 text-gray-500">Empowering communities through effective team management</p>
          </div>
        </div>

        <div className="px-6 space-y-5 pb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Login As</label>
            <div className="relative">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 pr-8 text-sm text-gray-800 outline-none focus-visible:ring-[3px] focus-visible:ring-green-600/50 focus-visible:border-green-600"
              >
                <option>Admin</option>
              </select>
              <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.354a.75.75 0 111.02 1.1l-4.22 3.815a.75.75 0 01-1.02 0L5.25 8.33a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email or Phone</label>
            <input
              type="text"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="Enter your email or phone"
              className="file:text-foreground placeholder:text-gray-400 border border-gray-300 bg-white flex h-9 w-full min-w-0 rounded-md px-3 py-2 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-green-600/50 focus-visible:border-green-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="file:text-foreground placeholder:text-gray-400 border border-gray-300 bg-white flex h-9 w-full min-w-0 rounded-md px-3 py-2 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-green-600/50 focus-visible:border-green-600"
            />
            <div className="mt-1 text-right">
              <Link to="/forgot-password" className="text-sm text-green-700 hover:underline">Forgot Password?</Link>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all w-full h-9 px-4 py-2 bg-green-700 hover:bg-green-700/90 text-white outline-none focus-visible:ring-[3px] focus-visible:ring-green-600/50"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;


