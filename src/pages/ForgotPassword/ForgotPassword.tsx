import ForgotPasswordForm from '../../components/Auth/ForgotPasswordForm/ForgotPasswordForm';
import GuestPage from '../../components/Layouts/Guest/GuestPage';

const ForgotPassword = () => {
  return (
    <GuestPage title="Forgot your password">
      <ForgotPasswordForm />
    </GuestPage>
  );
};

export default ForgotPassword;
