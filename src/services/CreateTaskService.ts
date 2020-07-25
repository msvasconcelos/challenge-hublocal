import { getRepository } from 'typeorm';

import Task from '../models/Task';

interface Request {
  name: string;
  description: string;
  status: 'not_done' | 'in_progress' | 'done';
  user_id: string;
}

export default class CreateTaskService {
  public async execute({
    name,
    description,
    status,
    user_id,
  }: Request): Promise<Task> {
    const taskRepository = getRepository(Task);

    const task = taskRepository.create({
      name,
      description,
      status,
      user_id,
    });

    if (task.status !== 'not_done' && 'in_progress' && 'done') {
      throw new Error('status do task invalido');
    }

    await taskRepository.save(task);

    return task;
  }
}
