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
