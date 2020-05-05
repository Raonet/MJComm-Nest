import { Module } from '@nestjs/common';

import { DatabaseModule } from '../db/database.module';
import { RepairController } from './repair.controller';
import { RepairService } from './repair.service';
import { RepairProviders } from './repair.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [RepairController],
  providers: [RepairService, ...RepairProviders],
})
export class RepairModule { }
