import type { Users, Teams } from "@reddit-comments/types";

export type UserWithTeams = Users & { teams: Teams[] };

export async function getUserSession(): Promise<UserWithTeams> {
  const response = await fetch("/api/auth/me", {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();
  return data.user;
}
