// schemas.js
import { z } from 'zod';

export const UserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .max(50, 'Password must be at most 50 characters long')
        .regex(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/,
            'Password must be Strong'
        )
});
