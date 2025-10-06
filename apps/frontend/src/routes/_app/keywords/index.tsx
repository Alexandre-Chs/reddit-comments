import KeywordsPage from "@/features/keywords/view/KeywordsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/keywords/")({
  component: KeywordsPage,
});
