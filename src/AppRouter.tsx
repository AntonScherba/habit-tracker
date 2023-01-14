import { createBrowserRouter, RouteObject } from 'react-router-dom';
import ResetPasswordForm from './components/Auth/ResetPasswordForm/ResetPasswordForm';
import Default from './components/Layouts/Default/Default';
import ErrorPage from './components/Layouts/ErrorPage';
import GuestLayout from './components/Layouts/Guest/GuestLayout';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Verify from './pages/Verify/Verify';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Default />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <div>main</div>,
      },
      {
        path: 'about',
        element: <div>about</div>,
      },
    ],
  },
  {
    element: <GuestLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'verify',
        element: <Verify />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'reset-password',
        element: <ResetPasswordForm />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
