import { z } from "zod";

export const registerSchema = z.object({
  userName: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  teamName: z.string().min(3, "Team name must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;

export type mescouillles = {
  test: string;
};
