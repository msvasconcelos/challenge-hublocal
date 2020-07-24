import { Router } from 'express';
import CreateUserServices from '../services/CreateUserServices';

const userRouter = Router();

userRouter.post('/', async (request, response) => {
  const { name, email, senha } = request.body;

  const createUser = new CreateUserServices();

  const user = await createUser.execute({
    name,
    email,
    senha,
  });

  delete user.senha;
  return response.json(user);
});

export default userRouter;
