import { Router } from 'express';

import userRouter from './user.routes';
import sessionRouter from './sessions.routes';
import taskRouter from './task.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionRouter);
routes.use('/task', taskRouter);

export default routes;
