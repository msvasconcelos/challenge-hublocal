import { Router } from 'express';

import userRouter from './user.routes';
import sessionRouter from './sessions.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionRouter);

export default routes;
