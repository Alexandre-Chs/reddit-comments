export async function teamCreate(data: { teamName: string; userId: string }) {
  const response = await fetch("/api/teams", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}
