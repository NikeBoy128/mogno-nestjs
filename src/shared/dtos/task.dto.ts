import { ApiProperty } from '@nestjs/swagger';

export class CreateOrUpdateTasks {
  @ApiProperty({
    type: String,
    example: 'Title',
    description: 'The title of the task',
    required: true,
    nullable: false,
  })
  title: string;

  @ApiProperty({
    type: String,
    example: 'Description',
    description: 'The description of the task',
    required: true,
    nullable: false,
  })
  description: string;
}
