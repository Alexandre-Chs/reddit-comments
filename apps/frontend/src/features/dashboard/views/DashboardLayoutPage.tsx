import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Outlet, useRouteContext, useRouter } from "@tanstack/react-router";
import { toast } from "sonner";
import { teamCreate } from "../api/onboarding";
import clsx from "clsx";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/AppSidebar";

const DashboardLayoutPage = () => {
  const [teamName, setTeamName] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const user = useRouteContext({ from: "/_app" });
  const router = useRouter();

  const handleCreateTeam = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsCreating(true);
    const response = await teamCreate({ teamName, userId: user.id });
    setIsCreating(false);

    if (!response.ok) {
      toast.error(
        response.errors?.[0]?.message || "An error occurred, please try again"
      );
      return;
    }

    toast.success("Team created successfully");
    router.invalidate();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(user.email);
    toast.success("Email copied to clipboard");
  };

  if (!user.teams.length) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="w-full max-w-md space-y-8 p-8">
          <div className="text-left space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">
              Create a team
            </h1>
            <p className="text-muted-foreground text-sm">
              Get started by creating your own team, or ask a team owner to
              invite you
            </p>
          </div>

          <form onSubmit={handleCreateTeam}>
            <div className="mb-4">
              <label htmlFor="teamName" className="text-sm font-medium">
                Team name
              </label>
              <Input
                className="mt-2"
                id="teamName"
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Acme Inc."
                disabled={isCreating}
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isCreating || !teamName.trim()}
              className={clsx("w-full", isCreating && "cursor-not-allowed")}
            >
              {isCreating ? "Creating..." : "Create team"}
            </Button>
          </form>

          <div className="flex items-center gap-2">
            <div className="h-px flex flex-1 bg-muted-foreground"></div>
            <div className="text-sm tracking-wider text-muted-foreground">
              OR GET INVITED
            </div>
            <div className="h-px flex flex-1 bg-muted-foreground"></div>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Share your email with a team owner to get invited
            </p>
            <div className="flex gap-2">
              <Input value={user.email} readOnly className="flex-1 bg-muted" />
              <Button type="button" variant="outline" onClick={handleCopyEmail}>
                Copy
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Team owners can add you in{" "}
              <span className="font-medium">Settings → Team → Add member</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <main className="w-full bg-zinc-900 p-6">
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayoutPage;
