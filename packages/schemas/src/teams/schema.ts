import z from "zod";

export const teamCreateSchema = z.object({
  teamName: z.string().min(3, "Team name must be at least 3 characters long"),
});

export const teamActiveSchema = z.object({
  teamId: z.string().uuid("Invalid team ID"),
});

export const teamUserAddSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const teamKeywordAddSchema = z.object({
  keyword: z.string().min(1, "Keyword cannot be empty"),
});

export const teamKeywordToggleStatusSchema = z.object({
  keywordId: z.string().uuid("Invalid keyword ID"),
});

export type TeamCreateSchemaType = z.infer<typeof teamCreateSchema>;
export type TeamActiveSchemaType = z.infer<typeof teamActiveSchema>;
export type TeamUserAddSchemaType = z.infer<typeof teamUserAddSchema>;
export type TeamToggleStatusType = z.infer<typeof teamKeywordToggleStatusSchema>;
