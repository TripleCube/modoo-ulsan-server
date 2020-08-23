import { promisify } from 'util';

import { redis } from '@loaders';

// Async

export const getAsync = promisify(redis.get).bind(redis);
export const setAsync = promisify(redis.set).bind(redis);
export const existsAsync = promisify(redis.exists).bind(redis);

export const hgetallAsync = promisify(redis.hgetall).bind(redis);
export const hsetAsync = promisify(redis.hset).bind(redis);
export const expireAsync = promisify(redis.expire).bind(redis);
