import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/Auth';

const ResetPasswordForm = () => {
  const { state } = useLocation();
  const auth = useAuth();
  const navigate = useNavigate();

  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isShowPassword, setShowPassword] = useState(false);

  const resetPassword = (event: React.FormEvent) => {
    event.preventDefault();
    const { email } = state;

    auth.confirmPassword(email, code, newPassword, () => navigate('/login'));
  };

  return (
    <form className="space-y-6" onSubmit={resetPassword}>
      <div>
        <label
          className="mb-2 block cursor-pointer text-sm text-gray-700"
          htmlFor="code"
        >
          Code
        </label>
        <input
          id="code"
          className="w-full border py-2 px-3 text-gray-700"
          name="code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
      </div>

      <div>
        <label
          className="mb-2 block cursor-pointer text-sm text-gray-700"
          htmlFor="new-password"
        >
          New password
        </label>
        <input
          className="w-full border py-2 px-3 text-gray-700"
          onChange={(e) => setNewPassword(e.target.value)}
          value={newPassword}
          type={isShowPassword ? 'text' : 'password'}
          name="password"
          id="password"
          required
        />
      </div>

      <div className="flex items-center">
        <input
          id="show-password"
          type="checkbox"
          name="showPassword"
          checked={isShowPassword}
          onChange={() => setShowPassword(!isShowPassword)}
        />
        <label className="ml-2 cursor-pointer text-sm" htmlFor="show-password">
          Show Password
        </label>
      </div>

      <div className="space-y-2">
        <button type="submit" className="w-full bg-blue-400 py-2 px-4">
          Reset my password
        </button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
