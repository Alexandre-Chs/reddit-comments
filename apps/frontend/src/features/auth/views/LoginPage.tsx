import LoginForm from "../components/LoginForm";
import WelcomeAuth from "../components/WelcomeAuth";

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <WelcomeAuth />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
