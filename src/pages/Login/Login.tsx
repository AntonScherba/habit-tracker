import LoginForm from '../../components/Auth/LoginForm/LoginForm';
import GuestPage from '../../components/Layouts/Guest/GuestPage';

const Login = () => {
  return (
    <GuestPage title="Login to your account">
      <LoginForm />
    </GuestPage>
  );
};

export default Login;
