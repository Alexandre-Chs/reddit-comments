import type { RegisterSchemaType } from "@reddit-comments/schemas";

export async function authRegister(data: RegisterSchemaType) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const responseData = await response.json();
  return responseData;
}
