import z from 'zod';
import { teamActiveSchema, teamCreateSchema } from '@reddit-comments/schemas';

export type TeamCreateDTO = z.infer<typeof teamCreateSchema>;
export type ActiveTeamDTO = z.infer<typeof teamActiveSchema>;
