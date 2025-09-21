import { createFileRoute } from "@tanstack/react-router";
import { LoginScreen } from "../../features/auth/views/login-screen";

export const Route = createFileRoute("/auth/login")({
  component: LoginScreen,
});
