import z from 'zod';
import { registerSchema } from '@reddit-comments/schemas';

export type RegisterDTO = z.infer<typeof registerSchema>;
