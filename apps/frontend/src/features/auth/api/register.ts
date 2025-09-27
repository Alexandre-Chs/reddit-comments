import type { RegisterFormData } from "@reddit-comments/types";

export async function authRegister(data: RegisterFormData) {
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

  console.log("response du backend sur register", responseData);
  return response;
}
