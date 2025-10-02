import type { RegisterSchemaType } from "@reddit-comments/schemas";

export async function authRegister(data: RegisterSchemaType) {
  const response = await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  return { ...responseData };
}
