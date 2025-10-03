import z from 'zod';
import { teamCreateSchema } from '@reddit-comments/schemas';

export type teamCreateDTO = z.infer<typeof teamCreateSchema>;
