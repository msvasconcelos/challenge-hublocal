import { getRepository } from 'typeorm';
import Task from '../models/Task';

interface Request {
  id: string;
  name: string;
  description: string;
  status: 'not_done' | 'in_progress' | 'done';
}

export default class UpdateTaskService {
  public async execute({
    id,
    name,
    description,
    status,
  }: Request): Promise<Task> {
    const taskRepository = getRepository(Task);

    const task = await taskRepository.findOne(id);

    if (!task) {
      throw new Error('Task not found');
    }

    task.name = name;
    task.description = description;
    task.status = status;

    await taskRepository.save(task);

    return task;
  }
}
