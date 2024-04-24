'use server';
import { cookies } from 'next/headers';

export const deleteCookies = (name) => {
    cookies().delete(name);
};
