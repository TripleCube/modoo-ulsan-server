import { createClient } from 'redis';

const client = createClient();

client.on('error', error => console.error(error));
client.on('connect', () => console.log('Connected to Redis'));

export default client;
