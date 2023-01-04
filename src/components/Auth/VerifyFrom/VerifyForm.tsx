import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../../contexts/Auth';

const VerifyForm = () => {
  const [searchParams] = useSearchParams();
  const auth = useAuth();
  const navigate = useNavigate();

  const [code, setCode] = useState('');

  const confirm = (event: React.FormEvent) => {
    event.preventDefault();
    const email = searchParams.get('email') || '';

    auth.confirmSignUp({ email, code }, () => navigate('/login'));
  };

  return (
    <form onSubmit={confirm}>
      <div className="mb-4">
        <label
          className="mb-2 block cursor-pointer text-sm text-gray-700"
          htmlFor="confirm"
        >
          Confirm
        </label>
        <input
          className="w-full border py-2 px-3 text-gray-700"
          onChange={(e) => setCode(e.target.value)}
          value={code}
          type="string"
          name="confirm"
          id="confirm"
        />
      </div>

      <button type="submit" className="w-full bg-blue-400 py-2 px-4">
        Confirm
      </button>
    </form>
  );
};

export default VerifyForm;
