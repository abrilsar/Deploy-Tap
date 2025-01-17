import { userController } from '@/components/users/user.controller';
import type { FastifyInstance, FastifyPluginOptions } from 'fastify';

export async function userRouter(
  fastify: FastifyInstance,
  options?: FastifyPluginOptions
) {
  fastify.get('/v1/users/:id', userController.findOne);
  // fastify.get('/v1/users/:id', () => { return 'hoka' });

  fastify.post('/v1/create-user', userController.createUser);
}
