import { Router } from 'express';
import CreateTaskService from '../services/CreateTaskService';
import ListTaskService from '../services/ListTaskService';
import ensureAuthenticated from '../middlewares/ensureAuthenticate';
import UpdateTaskService from '../services/UpdateTaskService';
import DeleteTaskService from '../services/DeleteTaskService';

const taskRouter = Router();

taskRouter.use(ensureAuthenticated);

taskRouter.get('/', async (request, response) => {
  const user_id = request.user.id;

  const liskTaskService = new ListTaskService();

  const listTask = await liskTaskService.execute({
    user_id,
  });

  return response.json(listTask);
});

taskRouter.post('/', async (request, response) => {
  const { name, description, status, user_id } = request.body;

  const createUser = new CreateTaskService();

  const task = await createUser.execute({
    name,
    description,
    status,
    user_id,
  });

  return response.json(task);
});

taskRouter.put('/', async (request, response) => {
  // const user_id = request.user.id;
  const { id, name, description, status } = request.body;

  const taskUpdate = new UpdateTaskService();

  const task = taskUpdate.execute({
    id,
    description,
    name,
    status,
  });

  return response.json(task);
});

taskRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const taskDelete = new DeleteTaskService();

  await taskDelete.execute({
    id,
  });

  return response.json();
});

export default taskRouter;
