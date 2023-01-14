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

  const resendCode = () => {
    const email = searchParams.get('email') || '';
    auth.resendConfirmationCode(email, () => {});
  };

  return (
    <form onSubmit={confirm}>
      <div className="mb-4">
        <input
          className="w-full border py-2 px-3 text-gray-700"
          onChange={(e) => setCode(e.target.value)}
          value={code}
          type="string"
          name="confirm"
          id="confirm"
        />
      </div>

      <div className="space-y-2">
        <button type="submit" className="w-full bg-blue-400 py-2 px-4">
          Verify
        </button>
        <div className="space-x-2 text-right text-sm">
          <span>{"Didn't recieve code?"}</span>
          <button
            type="button"
            className="text-blue-600 hover:text-blue-500"
            onClick={resendCode}
          >
            Resend code
          </button>
        </div>
      </div>
    </form>
  );
};

export default VerifyForm;
