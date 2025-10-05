import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouteContext, useRouter } from "@tanstack/react-router";
import { teamCreate as apiTeamCreate } from "../../dashboard/api/onboarding";
import Errors from "@/components/errors";
import { toast } from "sonner";
import { teamUserAdd, getTeamUsers } from "../api/settings";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { Users } from "@reddit-comments/types";

type errorsType = {
  createTeam?: string[];
  teamUserAdd?: string[];
};

const SettingsTeams = () => {
  const [email, setEmail] = useState<string>("");
  const [teamCreate, setTeamCreate] = useState<string>("");
  const [errors, setErrors] = useState<errorsType>({});

  const user = useRouteContext({ from: "/_app" });
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["team-users"],
    queryFn: getTeamUsers,
  });

  const users = data?.users || [];

  const handleUserAdd = async () => {
    if (!email || email.trim() === "") return;

    const response = await teamUserAdd(email);
    if (response.errors) {
      setErrors({
        ...errors,
        teamUserAdd: response.errors.map((item: any) => item.message),
      });

      return;
    }

    setEmail("");
    toast.success("User added to team");
    setErrors({});
    queryClient.invalidateQueries({ queryKey: ["team-users"] });
  };

  const handleTeamCreate = async () => {
    if (!teamCreate || teamCreate.trim() === "") return;

    const response = await apiTeamCreate({
      teamName: teamCreate,
      userId: user.id,
    });

    if (response.errors) {
      setErrors({
        ...errors,
        createTeam: response.errors.map((item: any) => item.message),
      });
    }

    toast.success("Team created successfully");
    setTeamCreate("");
    setErrors({});
    router.invalidate();
  };

  return (
    <div className="max-w-2xl space-y-12 py-6">
      {/* create a new team */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Create a team</h3>
          <p className="text-sm text-muted-foreground">Create a new team to collaborate with others</p>
        </div>

        <div className="flex gap-2 max-w-md">
          <Input type="teamName" placeholder="Acme Inc." className="flex-1" value={teamCreate} onChange={(e) => setTeamCreate(e.target.value)} />
          <Button onClick={handleTeamCreate}>Create</Button>
        </div>
        {errors.createTeam && <Errors errors={errors.createTeam} />}
      </div>

      {/* Add member section */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Add member</h3>
          <p className="text-sm text-muted-foreground">Invite a new member to join your team</p>
        </div>

        <div className="flex gap-2 max-w-md">
          <Input type="email" placeholder="email@example.com" className="flex-1" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Button onClick={handleUserAdd}>Add</Button>
        </div>
        {errors.teamUserAdd && <Errors errors={errors.teamUserAdd} />}
      </div>

      {/* Members list section */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Team members</h3>
          <p className="text-sm text-muted-foreground">
            {users.length} {users.length > 1 ? "members" : "member"}
          </p>
        </div>

        {isLoading ? (
          <p className="text-sm text-muted-foreground">Loading...</p>
        ) : (
          <div className="border rounded-lg divide-y">
            {users.map((user: Users) => (
              <div key={user.email} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                <div className="space-y-1">
                  <p className="text-sm font-medium">{user.username}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>

                <Button variant="secondary" size="sm" className="cursor-pointer">
                  Remove
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsTeams;
