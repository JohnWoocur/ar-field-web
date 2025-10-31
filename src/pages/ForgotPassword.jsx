import { Link } from 'react-router-dom';
import { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2d6a4f] via-[#40916c] to-[#52b788] flex items-center justify-center p-4">
      <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border w-full max-w-md shadow-2xl">
        <div className="grid auto-rows-min items-start gap-1.5 px-6 pt-6 text-center space-y-2 pb-4">
          <h1 className="text-2xl">Forgot Password</h1>
          <p className="text-gray-500">Enter your registered email to reset your password</p>
        </div>

        <div className="px-6 space-y-5 pb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.org"
              className="file:text-foreground placeholder:text-gray-400 border border-gray-300 bg-white flex h-9 w-full min-w-0 rounded-md px-3 py-2 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-green-600/50 focus-visible:border-green-600"
            />
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all w-full h-9 px-4 py-2 bg-green-700 hover:bg-green-700/90 text-white outline-none focus-visible:ring-[3px] focus-visible:ring-green-600/50"
          >
            Send Reset Link
          </button>

          <div className="text-center">
            <Link to="/" className="text-sm text-green-700 hover:underline">Back to Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;


