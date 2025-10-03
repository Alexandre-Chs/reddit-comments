import { getUserSession } from "@/features/auth/api/session";
import LayoutPage from "@/features/dashboard/views/DashboardPage";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  beforeLoad: async () => {
    const user = await getUserSession();
    if (!user) {
      throw redirect({
        to: "/login",
      });
    }

    return user;
  },
  component: LayoutPage,
});
