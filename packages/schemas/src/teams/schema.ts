import z from "zod";

export const teamCreateSchema = z.object({
  teamName: z.string().min(3, "Team name must be at least 3 characters long"),
});

export type TeamCreateSchemaType = z.infer<typeof teamCreateSchema>;
