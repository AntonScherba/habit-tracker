import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/Auth';

const RequireAuth = ({ children }: { children: React.ReactElement }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.userToken) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate state={{ from: location }} to="/login" replace />;
  }

  return children;
};

export default RequireAuth;
