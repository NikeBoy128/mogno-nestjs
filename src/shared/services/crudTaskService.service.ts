import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TasksShema } from '../entities/tasks.schema';
import { CreateOrUpdateTasks } from '../dtos/task.dto';
@Injectable()
export class CrudTaskServiceService {
  constructor(
    @InjectModel('Tasks') private taskRepositoy: Model<typeof TasksShema>,
  ) {}

  async findAll() {
    return await this.taskRepositoy.find();
  }

  async create(CreateOrUpdateTasks: CreateOrUpdateTasks) {
    const task = new this.taskRepositoy(CreateOrUpdateTasks);
    return await task.save();
  }
}
