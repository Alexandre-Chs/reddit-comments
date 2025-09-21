import { LoginForm } from "../components/login-form";

export const LoginScreen = () => (
  <div className="flex min-h-screen items-center justify-center bg-muted">
    <div className="w-full max-w-md rounded-lg border bg-background p-6 shadow-sm">
      <LoginForm />
    </div>
  </div>
);
