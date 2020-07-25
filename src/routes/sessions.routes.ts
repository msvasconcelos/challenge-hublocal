import { Router } from 'express';
import AuthenticatesUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, senha } = request.body;

  const authenticateUser = new AuthenticatesUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    senha,
  });
  delete user.senha;

  return response.json({ user, token });
});

export default sessionsRouter;
