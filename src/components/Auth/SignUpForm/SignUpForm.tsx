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

    auth.signUp({ email, password }, () =>
      navigate('/verify', { state: { email } })
    );
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
          id="email"
          name="email"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
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
          id="password"
          name="password"
          type={isShowPassword ? 'text' : 'password'}
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
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
