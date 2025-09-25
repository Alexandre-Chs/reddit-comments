import type { RegisterFormData } from "../components/RegisterForm";

export async function authRegister(data: RegisterFormData) {
  const response = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  console.log("response du backend sur register", responseData);
  return response;
}
