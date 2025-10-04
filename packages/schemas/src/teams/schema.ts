import z from "zod";

export const teamCreateSchema = z.object({
  teamName: z.string().min(3, "Team name must be at least 3 characters long"),
});

export const teamActiveSchema = z.object({
  teamId: z.string().uuid("Invalid team ID"),
});

export type TeamCreateSchemaType = z.infer<typeof teamCreateSchema>;
export type TeamActiveSchemaType = z.infer<typeof teamActiveSchema>;
