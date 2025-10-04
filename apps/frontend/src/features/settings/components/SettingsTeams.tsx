import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouteContext, useRouter } from "@tanstack/react-router";
import { teamCreate as apiTeamCreate } from "../../dashboard/api/onboarding";
import Errors from "@/components/errors";
import { toast } from "sonner";

type errorsType = {
  createTeam?: string[];
};

const SettingsTeams = () => {
  const [email, setEmail] = useState<string>("");
  const [teamCreate, setTeamCreate] = useState<string>("");
  const [errors, setErrors] = useState<errorsType>({});

  const user = useRouteContext({ from: "/_app" });
  const router = useRouter();

  const members = [
    { email: "user1@example.com", username: "user1" },
    { email: "user2@example.com", username: "user2" },
    { email: "user3@example.com", username: "user3" },
  ];

  const handleUserAdd = () => {};

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
          <p className="text-sm text-muted-foreground">
            Create a new team to collaborate with others
          </p>
        </div>

        <div className="flex gap-2 max-w-md">
          <Input
            type="teamName"
            placeholder="Acme Inc."
            className="flex-1"
            value={teamCreate}
            onChange={(e) => setTeamCreate(e.target.value)}
          />
          <Button onClick={handleTeamCreate}>Create</Button>
        </div>
        {errors.createTeam && <Errors errors={errors.createTeam} />}
      </div>

      {/* Add member section */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Add member</h3>
          <p className="text-sm text-muted-foreground">
            Invite a new member to join your team
          </p>
        </div>

        <div className="flex gap-2 max-w-md">
          <Input
            type="email"
            placeholder="email@example.com"
            className="flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleUserAdd}>Add</Button>
        </div>
      </div>

      {/* Members list section */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Team members</h3>
          <p className="text-sm text-muted-foreground">
            {members.length} {members.length > 1 ? "members" : "member"}
          </p>
        </div>

        <div className="border rounded-lg divide-y">
          {members.map((member) => (
            <div
              key={member.email}
              className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium">{member.username}</p>
                <p className="text-sm text-muted-foreground">{member.email}</p>
              </div>

              <Button variant="secondary" size="sm" className="cursor-pointer">
                Remove
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsTeams;
