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
          className="w-full border py-2 px-3 text-gray-700"
          id="code"
          name="code"
          type="text"
          value={code}
          required
          onChange={(e) => setCode(e.target.value)}
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
          id="password"
          name="password"
          type={isShowPassword ? 'text' : 'password'}
          value={newPassword}
          required
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>

      <div className="flex items-center">
        <input
          checked={isShowPassword}
          id="show-password"
          name="showPassword"
          type="checkbox"
          onChange={() => setShowPassword(!isShowPassword)}
        />
        <label className="ml-2 cursor-pointer text-sm" htmlFor="show-password">
          Show Password
        </label>
      </div>

      <div className="space-y-2">
        <button className="w-full bg-blue-400 py-2 px-4" type="submit">
          Reset my password
        </button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
