import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/Auth';

const LoginForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (event: React.FormEvent) => {
    event.preventDefault();

    auth.login({ email, password }, () => navigate(`/`));
  };

  return (
    <form onSubmit={login}>
      <div className="mb-4">
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

      <div className="mb-4">
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
          type="password"
          name="password"
          id="password"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-400 py-2 px-4">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
