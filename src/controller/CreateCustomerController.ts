import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateCustomerService } from '../service/CreateCustomerService';

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as { name: string; email: string };
    console.log('testando');

    const customerService = new CreateCustomerService();
    const customer = await customerService.execute({ name, email });

    reply.send(customer);
  }
}

export { CreateCustomerController };
