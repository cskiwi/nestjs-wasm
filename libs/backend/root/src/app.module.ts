import { Module } from '@nestjs/common';
import { BackendTestModule } from '@app/backend-test';

@Module({
  imports: [BackendTestModule],
  controllers: [],
})
export class AppModule {}

