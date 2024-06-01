import { Module } from '@nestjs/common';
import { DatabaseService } from './db.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DbModule {}
