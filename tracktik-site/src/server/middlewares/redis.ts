import Redis from "ioredis";

function exitProcess(err) {
    console.error(err);
    process.exit(1);
}

/** @type {import('@sveltejs/kit').Handle} */
export default async function ({ request, resolve }) {
    const redisClient = process.env["REDIS_CONNECTION"] ? new Redis(process.env["REDIS_CONNECTION"]) : new Redis();
    
    redisClient.once('connect', function() {
        redisClient.removeListener('error', exitProcess);
    });
    
    redisClient.once('error', exitProcess);

    request.locals.redis = redisClient;
    return await resolve(request);
};
