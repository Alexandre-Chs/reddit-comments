export async function getUserSession() {
  const response = await fetch("/api/auth/me", {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();
  return data.user;
}
