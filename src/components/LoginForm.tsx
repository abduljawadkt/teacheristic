import React, { useState } from 'react';
import { X, LogIn } from 'lucide-react';

interface LoginFormProps {
  onClose: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      setError('Incorrect user ID or password');
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
        >
          <X size={20} />
        </button>

        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-lavender-600 to-lavender-700 shadow-lg">
                <LogIn size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-navy-800">Login</h2>
            </div>
            <p className="text-sm text-slate-600">
              Enter your credentials to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="userId" className="block text-sm font-semibold text-slate-700 mb-2">
                User ID
              </label>
              <input
                type="text"
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-900 transition-colors focus:border-lavender-600 focus:outline-none"
                placeholder="Enter your user ID"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-900 transition-colors focus:border-lavender-600 focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 border-2 border-red-200 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-gradient-to-r from-lavender-600 to-lavender-700 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-lavender-600 hover:text-lavender-700 transition-colors">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
