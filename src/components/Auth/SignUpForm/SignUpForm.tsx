import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/Auth';

const SignUpForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setShowPassword] = useState(false);

  const signUp = (event: React.FormEvent) => {
    event.preventDefault();

    auth.signUp({ email, password }, () => navigate(`/verify?email=${email}`));
  };

  return (
    <form className="space-y-6" onSubmit={signUp}>
      <div>
        <label
          className="mb-2 block cursor-pointer text-sm text-gray-700"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full border py-2 px-3 text-gray-700"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          id="email"
          required
        />
      </div>

      <div>
        <label
          className="mb-2 block cursor-pointer text-sm text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="w-full border py-2 px-3 text-gray-700"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={isShowPassword ? 'text' : 'password'}
          name="password"
          id="password"
          required
        />
      </div>
      <div>
        <input
          id="show-password"
          type="checkbox"
          name="showPassword"
          checked={isShowPassword}
          onChange={() => setShowPassword(!isShowPassword)}
        />
        <label className="ml-2 text-sm" htmlFor="show-password">
          Show Password
        </label>
      </div>

      <div className="space-y-2">
        <button type="submit" className="w-full bg-blue-400 py-2 px-4">
          Sign in
        </button>
        <div className="space-x-2 text-right text-sm">
          <span>Already have an account?</span>
          <Link className="text-blue-600 hover:text-blue-500" to="/login">
            Login
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
