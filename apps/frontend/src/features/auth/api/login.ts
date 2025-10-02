import type { LoginSchemaType } from "@reddit-comments/schemas";

export async function login(data: LoginSchemaType) {
  const response = await fetch("api/auth/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: data.email, password: data.password }),
  });

  const responseData = await response.json();

  return { ...responseData };
}
