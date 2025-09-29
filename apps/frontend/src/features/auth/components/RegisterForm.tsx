import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authRegister } from "../api/register";
import type { RegisterSchemaType } from "@reddit-comments/schemas";

const RegisterForm = () => {
  const [formData, setFormData] = useState<RegisterSchemaType>({
    userName: "",
    teamName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await authRegister(formData);
    console.log("la response", response);
    if (response.errors)
      setErrors(
        response.errors.map((error: { message: string }) => error.message)
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-8 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-10 shadow-[0_40px_70px_-50px_rgba(15,15,15,0.8)] backdrop-blur"
    >
      <header className="grid gap-2 text-center">
        <h2 className="text-xl font-semibold text-neutral-50">
          Create your account
        </h2>
        <p className="text-sm text-neutral-400">
          Already on Reddit Team Inbox?
          <Link
            to="/login"
            className="ml-2 font-medium text-neutral-200 hover:text-white"
          >
            Sign in
          </Link>
        </p>
      </header>

      <div className="grid gap-5">
        <div className="grid gap-2">
          <label
            htmlFor="userName"
            className="text-xs font-medium uppercase tracking-wide text-neutral-300"
          >
            username
          </label>
          <Input
            id="userName"
            name="userName"
            type="text"
            placeholder="Alexandre"
            onChange={handleChange}
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="teamName"
            className="text-xs font-medium uppercase tracking-wide text-neutral-300"
          >
            Team name
          </label>
          <Input
            id="teamName"
            name="teamName"
            type="text"
            placeholder="Growth Collective"
            onChange={handleChange}
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="email"
            className="text-xs font-medium uppercase tracking-wide text-neutral-300"
          >
            Work email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="alexandre@company.com"
            onChange={handleChange}
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="password"
            className="text-xs font-medium uppercase tracking-wide text-neutral-300"
          >
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            onChange={handleChange}
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

      <div className="grid gap-1 text-xs text-neutral-500">
        <p>
          By signing up, you agree to our
          <a
            href="#"
            className="ml-1 text-neutral-200 underline-offset-2 hover:underline"
          >
            Terms of Service
          </a>{" "}
          and
          <a
            href="#"
            className="ml-1 text-neutral-200 underline-offset-2 hover:underline"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>

      <Button type="submit">Join</Button>
    </form>
  );
};

export default RegisterForm;
