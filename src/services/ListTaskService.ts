import { getRepository } from 'typeorm';

import Task from '../models/Task';

interface Request {
  user_id: string;
}

export default class ListTaskService {
  public async execute({ user_id }: Request): Promise<Task[]> {
    const taskRepository = getRepository(Task);

    const list = await taskRepository.find({
      where: { user_id },
    });

    return list;
  }
}
