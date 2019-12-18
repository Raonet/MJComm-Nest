import { Module } from '@nestjs/common';

import { DatabaseModule } from '../db/database.module';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { NewsProviders } from './news.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [NewsController],
  providers: [NewsService, ...NewsProviders],
})
export class NewsModule {}
