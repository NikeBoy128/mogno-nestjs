import { Module } from '@nestjs/common';

import { SharedModule } from './shared/shared.module';

@Module({
  imports: [SharedModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
