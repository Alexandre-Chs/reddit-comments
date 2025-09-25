import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="grid gap-8 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-10 shadow-[0_40px_70px_-50px_rgba(15,15,15,0.8)] backdrop-blur">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
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
