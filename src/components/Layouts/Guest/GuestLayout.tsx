import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../../contexts/Auth';

const GuestLayout = () => {
  const auth = useAuth();
  const location = useLocation();

  if (auth.userToken) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <main className="w-full max-w-md">
        <Outlet />
      </main>
    </div>
  );
};

export default GuestLayout;
