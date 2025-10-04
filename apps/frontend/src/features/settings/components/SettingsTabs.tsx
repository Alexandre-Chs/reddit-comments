import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SettingsAccount from "./SettingsAccount";
import SettingsTeams from "./SettingsTeams";

const SettingsTabs = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="teams">Teams</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <SettingsAccount />
      </TabsContent>
      <TabsContent value="teams">
        <SettingsTeams />
      </TabsContent>
    </Tabs>
  );
};

export default SettingsTabs;
