'use server';
import { cookies } from 'next/headers';

export const setCookies = (name, value) => {
    cookies().set(name, value);
};
