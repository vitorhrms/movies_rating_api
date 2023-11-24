import Fastify from 'fastify';
import { APP_PORT } from './config/env.js';
import Routes from './routes/index.js';
import cors from '@fastify/cors';

const app = Fastify({ logger: true, bodyLimit: 100 * 1024 * 1024 });

app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Origin, X-Requested-With, Content-Type, Accept, Authorization'],
});

app.register(Routes);

const start = async () => {
  try {
    await app.listen({ port: APP_PORT || 4002, host: '0.0.0.0' });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
