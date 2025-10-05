import z from 'zod';
import {
  teamActiveSchema,
  teamCreateSchema,
  teamUserAddSchema,
} from '@reddit-comments/schemas';

export type TeamCreateDTO = z.infer<typeof teamCreateSchema>;
export type ActiveTeamDTO = z.infer<typeof teamActiveSchema>;
export type UserTeamAddDTO = z.infer<typeof teamUserAddSchema>;
