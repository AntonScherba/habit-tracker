import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/Auth';

const ForgotPasswordForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    auth.forgotPassword(email, () =>
      navigate(`/reset-password`, { state: { email } })
    );
  };

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div>
        <label
          className="mb-2 block cursor-pointer text-sm text-gray-700"
          htmlFor="email"
        >
          {
            'Enter your verified email address and we will send you a message to reset your password'
          }
        </label>
        <input
          className="w-full border py-2 px-3 text-gray-700"
          id="email"
          name="email"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <button className="w-full bg-blue-400 py-2 px-4" type="submit">
          Reset my password
        </button>
        <div className="space-x-2 text-right text-sm">
          <span>Back to</span>
          <Link className="text-blue-600 hover:text-blue-500" to="/login">
            Login
          </Link>
        </div>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
