import ResetPasswordForm from '../../components/Auth/ResetPasswordForm/ResetPasswordForm';
import GuestPage from '../../components/Layouts/Guest/GuestPage';

const ResetPassword = () => {
  return (
    <GuestPage title="Reset your password">
      <ResetPasswordForm />
    </GuestPage>
  );
};

export default ResetPassword;
