import ResetPasswordForm from '../../components/Auth/ResetPasswordForm/ResetPasswordForm';
import GuestPage from '../../components/Layouts/Guest/GuestPage';

const ResetPassword = () => {
  return (
    <GuestPage title="Reset your password">
      <div className="space-y-4">
        <p className="text-gray-600">
          Please check your inbox and enter the verification code and new
          password below.
        </p>
        <ResetPasswordForm />
      </div>
    </GuestPage>
  );
};

export default ResetPassword;
