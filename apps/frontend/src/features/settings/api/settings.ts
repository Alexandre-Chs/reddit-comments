export async function teamUserAdd(email: string) {
  const response = await fetch("/api/teams/add-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email }),
  });

  return response.json();
}

export async function getTeamUsers() {
  const response = await fetch("/api/teams/users", {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) throw new Error("Failed to fetch team users");
  return response.json();
}
