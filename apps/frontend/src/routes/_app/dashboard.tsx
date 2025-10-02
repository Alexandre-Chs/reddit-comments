import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const user = Route.useRouteContext();
  return <div>Hello {user.username}"/_auth/dashboard"!</div>;
}
