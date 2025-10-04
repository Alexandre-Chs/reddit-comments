import SettingsPage from "@/features/settings/views/SettingsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/settings/")({
  component: SettingsPage,
});
