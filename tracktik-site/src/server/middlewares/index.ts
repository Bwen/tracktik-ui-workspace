import dotenv from './dotenv';
import redis from './redis';
import session from './session';
import locale from './locale';
import sentinel from './sentinel';

export default [
    dotenv,
    redis,
    session,
    locale,
    sentinel,
];
