import z from 'zod';
import { loginSchema } from '@reddit-comments/schemas';

export type LoginDTO = z.infer<typeof loginSchema>;
