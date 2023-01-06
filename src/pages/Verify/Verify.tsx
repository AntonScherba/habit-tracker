import VerifyForm from '../../components/Auth/VerifyFrom/VerifyForm';
import GuestPage from '../../components/Layouts/Guest/GuestPage';

const Verify = () => {
  return (
    <GuestPage title="Verify your email address">
      <div className="space-y-4">
        <p className="text-gray-600">
          Please check your inbox and enter the verification code below to
          verify your email address.
        </p>
        <VerifyForm />
      </div>
    </GuestPage>
  );
};

export default Verify;
