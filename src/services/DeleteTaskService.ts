import { getRepository } from 'typeorm';
import Task from '../models/Task';

interface Request {
  id: string;
}

export default class DeleteTaskService {
  public async execute({ id }: Request): Promise<void> {
    const taskRepository = getRepository(Task);

    const task = await taskRepository.findOne(id);

    if (!task) {
      throw new Error('identificação invalido');
    }

    await taskRepository.remove(task);
  }
}
