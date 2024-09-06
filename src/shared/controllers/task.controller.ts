import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CrudTaskServiceService } from '../services/crudTaskService.service';
import { CreateOrUpdateTasks } from '../dtos/task.dto';

@Controller('task')
@ApiTags('Task')
export class TaskController {
  constructor(private readonly crudTaskService: CrudTaskServiceService) {}

  @Get('/')
  async findAll() {
    return await this.crudTaskService.findAll();
  }

  @Post('/')
  async create(@Body() taskDto: CreateOrUpdateTasks) {
    return await this.crudTaskService.create(taskDto);
  }
}
