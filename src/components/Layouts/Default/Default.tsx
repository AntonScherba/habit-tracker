import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/Auth';
import RequireAuth from '../../Auth/RequireAuth/RequireAuth';

const Default = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    auth.logout(() => navigate('/login'));
  };

  return (
    <RequireAuth>
      <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <h1>default</h1>
        <main className="w-full max-w-md space-y-8">
          <Outlet />
        </main>

        <button className="w-full bg-blue-400 py-2 px-4" onClick={logout}>
          logout
        </button>
      </div>
    </RequireAuth>
  );
};

export default Default;
