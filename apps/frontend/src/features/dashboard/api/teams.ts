export async function teamActive(teamId: string) {
  const response = await fetch("/api/teams/active", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ teamId }),
  });

  return await response.json();
}
