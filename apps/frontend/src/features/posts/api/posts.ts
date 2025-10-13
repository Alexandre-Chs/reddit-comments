export async function postsTeam() {
  const response = await fetch("api/teams/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  return response.json();
}