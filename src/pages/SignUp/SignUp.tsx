import SignUpForm from '../../components/Auth/SignUpForm/SignUpForm';
import GuestPage from '../../components/Layouts/Guest/GuestPage';

const SignUp = () => {
  return (
    <GuestPage title="Create an account">
      <SignUpForm />
    </GuestPage>
  );
};

export default SignUp;
