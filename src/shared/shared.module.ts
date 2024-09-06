import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksShema } from './entities/tasks.schema';
import { CrudTaskServiceService } from './services/crudTaskService.service';
import { TaskController } from './controllers/task.controller';

@Module({})
export class SharedModule {
  static forRoot(): DynamicModule {
    return {
      module: SharedModule,
      providers: [CrudTaskServiceService],
      exports: [MongooseModule],
      controllers: [TaskController],
      imports: [
        MongooseModule.forRoot('your-url'),
        MongooseModule.forFeature([
          {
            name: 'Tasks',
            schema: TasksShema,
          },
        ]),
      ],
    };
  }
}
