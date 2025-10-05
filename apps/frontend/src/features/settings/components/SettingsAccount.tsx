import { useRouteContext } from "@tanstack/react-router";

const SettingsAccount = () => {
  const user = useRouteContext({ from: "/_app" });

  return (
    <div className="max-w-2xl space-y-12 py-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Username</h3>
          <p className="text-sm text-muted-foreground">{user.username}</p>
        </div>

        <div>
          <h3 className="text-lg font-medium">Email</h3>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsAccount;
