import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "../api/login";
import type { LoginSchemaType } from "@reddit-comments/schemas";
import { useNavigate, useRouter } from "@tanstack/react-router";

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginSchemaType>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await login(formData);
    if (response.errors) {
      setErrors(
        response.errors.map((error: { message: string }) => error.message)
      );
      return;
    }

    await router.invalidate();
    navigate({ to: "/" });
  };

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="grid gap-8 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-10 shadow-[0_40px_70px_-50px_rgba(15,15,15,0.8)] backdrop-blur"
      >
        <div className="grid gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>
          {errors.length > 0 && (
            <div className="rounded-md bg-red-900/20 border border-red-800 p-4">
              <ul className="space-y-1 text-sm text-red-400">
                {errors.map((error, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-red-500">•</span>
                    {error}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
      <div className="mt-4 text-center">
        <Link
          to="/register"
          className="text-sm text-indigo-400 hover:text-indigo-300"
        >
          Don't have an account? Register
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
