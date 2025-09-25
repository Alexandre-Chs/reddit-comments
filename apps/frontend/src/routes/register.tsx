import RegisterPage from "@/features/auth/views/RegisterPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
});
