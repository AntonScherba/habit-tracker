import { Navigate, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../../contexts/Auth';

const Guest = () => {
  const auth = useAuth();
  const location = useLocation();

  if (auth.userToken) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <div className="flex h-screen justify-center py-12 px-4 sm:px-6 lg:px-8">
      <main className="w-full max-w-md space-y-8">
        <ul className="flex justify-evenly">
          <li>
            <NavLink to="/login">Sign in</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign up</NavLink>
          </li>
        </ul>
        <hr />
        <Outlet />
      </main>
    </div>
  );
};

export default Guest;
