import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [UsersModule, DbModule],
  controllers: [AppController],
})
export class AppModule {}
