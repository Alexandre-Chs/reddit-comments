import z from 'zod';
import {
  teamActiveSchema,
  teamCreateSchema,
  teamKeywordAddSchema,
  teamKeywordToggleStatusSchema,
  teamUserAddSchema,
} from '@reddit-comments/schemas';

export type TeamCreateDTO = z.infer<typeof teamCreateSchema>;
export type ActiveTeamDTO = z.infer<typeof teamActiveSchema>;
export type UserTeamAddDTO = z.infer<typeof teamUserAddSchema>;
export type TeamKeywordAddDTO = z.infer<typeof teamKeywordAddSchema>;
export type teamKeywordToggleStatus = z.infer<
  typeof teamKeywordToggleStatusSchema
>;
