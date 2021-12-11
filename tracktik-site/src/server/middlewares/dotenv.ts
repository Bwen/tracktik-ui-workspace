import dotenv from 'dotenv';

dotenv.config();

/** @type {import('@sveltejs/kit').Handle} */
export default async function ({ request, resolve }) {
    return await resolve(request);
};
